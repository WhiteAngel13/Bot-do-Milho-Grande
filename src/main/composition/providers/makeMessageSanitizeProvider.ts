import { MessageSanitizeProvider } from '@/data/protocols/providers/MessageSanitizeProvider'
import { InternalMessageSanitizeProvider } from '@/infra/providers/message-sanitize'

export const makeMessageSanitizeProvider = (): MessageSanitizeProvider => {
  const provider = new InternalMessageSanitizeProvider()
  return provider
}
