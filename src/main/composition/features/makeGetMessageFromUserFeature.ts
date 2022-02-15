import { GetMessageFromUserFeature } from '@/data/features/get-message-from-user/GetMessageFromUserFeature'
import { makeMessageRepository } from '../repositories/makeMessageRepository'
import { makeMessageSanitizeProvider } from '../providers/makeMessageSanitizeProvider'

export const makeGetMessageFromUserFeature = (): GetMessageFromUserFeature => {
  const messageRepository = makeMessageRepository()
  const messageSanitizeProvider = makeMessageSanitizeProvider()
  const feature = new GetMessageFromUserFeature(
    messageSanitizeProvider,
    messageRepository
  )
  return feature
}
