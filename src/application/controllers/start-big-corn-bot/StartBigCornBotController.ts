import { StartBigCornBotFeature } from '../../../data/features/start-big-corn-bot/StartBigCornBotFeature'
import { HttpRequest, HttpResponse, Controller } from '../../../domain/models'

export class StartBigCornBotController implements Controller<null> {
  constructor (
    private readonly feature: StartBigCornBotFeature
  ) { }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    await this.feature.perform()

    return {
      body: null,
      StatusCode: 200
    }
  }
}
