import { MessageSanitizeProvider } from '@/data/protocols/providers/MessageSanitizeProvider'

export class InternalMessageSanitizeProvider implements MessageSanitizeProvider {
  public async sanitize (message: string): Promise<string> {
    const sanitizedMessage = message
      .toLowerCase()
      .trim()
      .split(' ')
      .filter(word => !!word)
      .join(' ')

    return sanitizedMessage
  }
}
