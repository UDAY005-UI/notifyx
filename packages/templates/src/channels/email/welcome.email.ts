import { RenderedTemplate } from "../../types/template.types";

export function welcomeEmail(name: string): RenderedTemplate {
  return {
    subject: "Welcome to NotifyX 🚀",
    body: `Hello ${name}, welcome to NotifyX.`,
  };
}