export function genericPush(title: string, message: string) {
  return {
    title,
    body: message,
  };
}