import { StartBigCornBotFeature } from '@/data/features/start-big-corn-bot/StartBigCornBotFeature'
import { makeMessageGateway } from '../gateways/makeMessageGateway'

export const makeStartBigCornBotFeature = (): StartBigCornBotFeature => {
  const messageGateway = makeMessageGateway()
  const feature = new StartBigCornBotFeature(messageGateway)
  return feature
}
