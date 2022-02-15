import { GetMessageFromUserFeature } from '@/data/features/get-message-from-user/GetMessageFromUserFeature'
import { GetMessageFromUserFeatureDTO } from '@/domain/application'
import { Controller, HttpRequest, HttpResponse } from '@/domain/models'

export class GetMessageFromUserController
implements Controller<GetMessageFromUserFeatureDTO, string | null> {
  constructor (
    private readonly feature: GetMessageFromUserFeature
  ) {}

  async handle (request: HttpRequest<GetMessageFromUserFeatureDTO>): Promise<HttpResponse<string | null>> {
    try {
      if (!request.body.message) {
        throw new Error('message is required')
      }

      const result = await this.feature.perform(request.body)

      return {
        StatusCode: 200,
        body: result
      }
    } catch (error) {
      const { message } = error as Error

      return {
        StatusCode: 500,
        body: message
      }
    }
  }
}
