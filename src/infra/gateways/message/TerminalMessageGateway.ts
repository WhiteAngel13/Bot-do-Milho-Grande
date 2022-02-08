import { MessageGateway } from 'data/protocols'

export class TerminalMessageGateway implements MessageGateway {
  async sendStartBot (): Promise<void> {
    console.log('Starting Big Corn Bot...')
    console.log('Estou pronto para receber sua mensagem!')
  }
}
