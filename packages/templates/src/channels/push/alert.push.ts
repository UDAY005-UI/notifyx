export function alertPush(message: string) {
  return {
    title: "Alert",
    body: message,
  };
}