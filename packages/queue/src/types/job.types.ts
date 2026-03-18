export interface EmailJob {
    type: "WELCOME_EMAIL" | "RESET_PASSWORD";
    payload: {
        userId: string;
        email: string;
        name?: string;
    }
}

export interface SmsJob {
    type: "WELCOME_SMS" | "RESET_PASSWORD";
    payload: {
        userId: string;
        mobileNo: number;
        name?: string;
    }
}

export interface PushJob {
    type: "WELCOME_PUSH";
    payload: {
        userId: string;
        email: string;
        mobileNo: number;
        name?: string;
    }
}