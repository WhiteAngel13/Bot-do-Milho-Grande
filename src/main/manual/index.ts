import { StartBigCornBotService } from './services/StartBigCornBotService'

export const initBot = async (): Promise<void> => {
  const service = new StartBigCornBotService()

  await service.exec()
}
