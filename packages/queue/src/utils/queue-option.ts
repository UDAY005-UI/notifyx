import { JobsOptions } from "bullmq";

export const baseJobOptions: JobsOptions = {
    removeOnComplete: true,
    removeOnFail: false
}

export const emailJobOptions: JobsOptions = {
    ...baseJobOptions,
    attempts: 5,
    backoff: {
        type: "exponential",
        delay: 5000
    }
};

export const smsJobOptions: JobsOptions = {
    ...baseJobOptions,
    attempts: 3,
    backoff: {
        type: "fixed",
        delay: 3000
    }
};

export const pushJobOptions: JobsOptions = {
    ...baseJobOptions,
    attempts: 2
}