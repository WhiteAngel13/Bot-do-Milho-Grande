import { MessageRepository } from '@/data/protocols/repositories/MessageRepository'
import { MockedMessageRepository } from '@/infra/repositories/mocked/MockedMessageRepository'

export const makeMessageRepository = (): MessageRepository => {
  const messageRepository = new MockedMessageRepository()
  return messageRepository
}
