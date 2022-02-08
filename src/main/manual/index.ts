import { StartBigCornBotService } from './services/StartBigCornBotService'

const main = async (): Promise<void> => {
  const service = new StartBigCornBotService()

  await service.exec()
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
main()
