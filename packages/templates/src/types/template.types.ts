export type TemplateChannel = "email" | "sms" | "push";

export interface RenderedTemplate {
  subject?: string;
  body: string;
}

export type TemplateFunction = (...args: any[]) => RenderedTemplate;