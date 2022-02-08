import { StartBigCornBotController } from '@/application/controllers/start-big-corn-bot/StartBigCornBotController'
import { makeStartBigCornBotFeature } from '../features/makeStartBigCornBotFeature'

export const makeStartBigCornBotController = (): StartBigCornBotController => {
  const feature = makeStartBigCornBotFeature()
  const controller = new StartBigCornBotController(feature)
  return controller
}
