import { Queue } from "bullmq";
import { connection } from "../connection/connection";
import { emailJobOptions } from "../utils/queue-option";

export const emailQueue = new Queue("email-queue", {
    connection,
    defaultJobOptions: emailJobOptions
})