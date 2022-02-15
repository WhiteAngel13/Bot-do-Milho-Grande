import { MessageSanitizeProvider } from '@/data/protocols/providers/MessageSanitizeProvider'
import { MessageRepository } from '@/data/protocols/repositories/MessageRepository'
import { GetMessageFromUserFeatureDTO } from '@/domain/application/features'
import { Feature } from '@/domain/models/protocols'

export class GetMessageFromUserFeature
implements Feature<GetMessageFromUserFeatureDTO, string | null> {
  constructor (
    private readonly messageSanitizeProvider: MessageSanitizeProvider,
    private readonly messageRepository: MessageRepository
  ) {}

  async perform (data: GetMessageFromUserFeatureDTO): Promise<string | null> {
    const sanitizedMessage = await this.messageSanitizeProvider
      .sanitize(data.message)

    const answer = await this.messageRepository
      .getAnswer(sanitizedMessage)

    if (!answer) {
      return null
    }

    return answer
  }
}
