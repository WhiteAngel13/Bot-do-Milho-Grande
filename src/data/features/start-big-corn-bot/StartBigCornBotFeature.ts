import { MessageGateway } from '@/data/protocols/gateways'
import { Feature } from '@/domain/models/protocols/Feature'

export class StartBigCornBotFeature implements Feature<void> {
  constructor (
    private readonly messageGateway: MessageGateway
  ) {}

  async perform (data: void): Promise<void> {
    await this.messageGateway.sendStartBot()
  }
}
