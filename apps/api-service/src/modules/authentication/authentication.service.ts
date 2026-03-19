import { Injectable } from '@nestjs/common';
import { prisma } from '@repo/database';
import {
  ConflictException,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { clerkClient } from '@clerk/clerk-sdk-node';

@Injectable()
export class AuthenticationService {
  async createUser(userId: string) {
    try {
      const existingUser = await prisma.user.findUnique({
        where: { clerkId: userId },
      });

      if (existingUser) {
        throw new ConflictException('User already exists');
      }

      const clerkUser = await clerkClient.users.getUser(userId);

      const email = clerkUser.emailAddresses[0]?.emailAddress;
      const name =
        `${clerkUser.firstName ?? ''} ${clerkUser.lastName ?? ''}`.trim() ||
        clerkUser.username ||
        'User';

      if (!email) {
        throw new NotFoundException('No primary email found');
      }

      const user = await prisma.user.create({
        data: {
          clerkId: userId,
          email,
          name,
        },
      });

      return user;
    } catch (error) {
      console.error(error);

      if (
        error instanceof ConflictException ||
        error instanceof NotFoundException
      ) {
        throw error;
      }

      throw new InternalServerErrorException('Error creating user');
    }
  }
}
