import { RenderedTemplate } from "../../types/template.types";

export function otpSMS(otp: string): RenderedTemplate {
  return {
    body: `Your OTP is ${otp}`,
  };
}