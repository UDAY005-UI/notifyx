import { RenderedTemplate } from "../../types/template.types";

export function alertSMS(message: string): RenderedTemplate {
  return {
    body: `Alert: ${message}`,
  };
}