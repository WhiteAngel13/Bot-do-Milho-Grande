import { makeStartBigCornBotController } from '../../../main/composition/controllers/makeStartBigCornBotController'

export class StartBigCornBotService {
  async exec (): Promise<void> {
    const controller = makeStartBigCornBotController()

    await controller.handle({ body: null })
  }
}
