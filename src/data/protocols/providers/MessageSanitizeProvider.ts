export interface MessageSanitizeProvider {
  sanitize: (message: string) => Promise<string>
}
