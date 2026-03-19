import { AuthenticationService } from './authentication.service';
import { Controller, Post, Req, UnauthorizedException } from '@nestjs/common';
import { type Request } from 'express';
import { getAuth } from '@clerk/express';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('signup')
  async createUser(@Req() req: Request) {
    const { userId } = getAuth(req);

    if (!userId) {
      throw new UnauthorizedException('Unauthorized');
    }

    return this.authenticationService.createUser(userId);
  }
}
