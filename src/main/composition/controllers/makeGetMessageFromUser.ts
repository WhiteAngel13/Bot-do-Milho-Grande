import { GetMessageFromUserController } from '@/application/controllers/get-message-from-user/GetMessageFromUserController'
import { makeGetMessageFromUserFeature } from '../features/makeGetMessageFromUserFeature'

export const makeGetMessageFromUserController = (): GetMessageFromUserController => {
  const feature = makeGetMessageFromUserFeature()
  const controller = new GetMessageFromUserController(feature)
  return controller
}
