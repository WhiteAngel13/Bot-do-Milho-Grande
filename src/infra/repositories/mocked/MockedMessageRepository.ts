import { MessageRepository } from '@/data/protocols/repositories/MessageRepository'

type Message = {
  phrases: string[]
  answer: string
}

export class MockedMessageRepository implements MessageRepository {
  private readonly messages: Message[] = [
    {
      phrases: ['oi', 'ola', 'hello'],
      answer: 'Hello'
    }
  ]

  async getAnswer (message: string): Promise<string | null> {
    const answer = this.messages.find(inDBmessage => inDBmessage.phrases.includes(message))

    return answer ? answer.answer : null
  }
}
