import { Queue } from "bullmq";
import { connection } from "../connection/connection";
import { smsJobOptions } from "../utils/queue-option";

export const smsQueue = new Queue("sms-queue", {
    connection,
    defaultJobOptions: smsJobOptions
})