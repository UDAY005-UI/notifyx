import { RenderedTemplate } from "../../types/template.types";

export function passwordResetEmail(link: string): RenderedTemplate {
  return {
    subject: "Reset Your Password",
    body: `Click the link to reset your password: ${link}`,
  };
}