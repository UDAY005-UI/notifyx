import { Queue } from "bullmq";
import { connection } from "../connection/connection";
import { emailJobOptions, pushJobOptions } from "../utils/queue-option";

export const pushQueue = new Queue("push-queue", {
    connection,
    defaultJobOptions: emailJobOptions
})