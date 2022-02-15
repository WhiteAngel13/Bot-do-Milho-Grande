export interface MessageSanitizeProvider {
  sanitize: (message: string) => string
}
