import { HttpProvider } from 'data/protocols/providers/HttpProvider'
import { MessageGateway } from '@/data/protocols'

export class ApiMessageGateway implements MessageGateway {
  constructor (
    private readonly httpProvider: HttpProvider
  ) {}

  async sendStartBot (): Promise<void> {
    await this.httpProvider.post('/api/v1/bots/start', {})
  }
}
