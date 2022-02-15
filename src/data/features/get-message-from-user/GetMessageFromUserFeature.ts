import { MessageSanitizeProvider } from '@/data/protocols/providers/MessageSanitizeProvider'
import { MessageRepository } from '@/data/protocols/repositories/MessageRepository'
import { GetMessageFromUserFeatureDTO } from '@/domain/application/features'
import { Feature } from '@/domain/models/protocols'

export class GetMessageFromUserFeature implements Feature<GetMessageFromUserFeatureDTO> {
  constructor (
    private readonly messageSanitizeProvider: MessageSanitizeProvider,
    private readonly messageRepository: MessageRepository
  ) {}

  async perform (data: GetMessageFromUserFeatureDTO): Promise<void> {
    const sanitizedMessage = await this.messageSanitizeProvider
      .sanitize(data.message)

    const answer = await this.messageRepository.getAnswer(sanitizedMessage)

    if (!answer) {
      throw new Error('No answer found')
    }

    this.sendMessage(answer)
  }

  private sendMessage (answer: string): void {
    console.log(answer)
  }
}
