import { ENVIROMENT } from '@/domain/application'
import { MessageGateway } from 'data/protocols'

export class TerminalMessageGateway implements MessageGateway {
  async sendStartBot (): Promise<void> {
    console.log(ENVIROMENT.messages.startBot)
  }
}
