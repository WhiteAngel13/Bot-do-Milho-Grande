import { HttpProvider } from '@/data/protocols/providers/HttpProvider'

export class MockedHttpProvider implements HttpProvider {
  async get (url: string): Promise<any> {
    console.log('Fazendo a requisição Get...')
  }

  async post (url: string, body: any): Promise<any> {
    console.log('Fazendo a requisição Post...')
  }
}
