import { MessageSanitizeProvider } from '@/data/protocols/providers/MessageSanitizeProvider'
import { GetMessageFromUserFeatureDTO } from '@/domain/application/features'
import { Feature } from '@/domain/models/protocols'

export class GetMessageFromUserFeature implements Feature<GetMessageFromUserFeatureDTO> {
  constructor (
    private readonly messageSanitizeProvider: MessageSanitizeProvider
  ) {}

  async perform (data: GetMessageFromUserFeatureDTO): Promise<void> {
    const sanitizedMessage = this.messageSanitizeProvider
      .sanitize(data.message)
  }
}
