import { RenderedTemplate } from "../../types/template.types";

export function otpEmail(otp: string): RenderedTemplate {
  return {
    subject: "Your OTP Code",
    body: `Your OTP is ${otp}. Valid for 5 minutes.`,
  };
}