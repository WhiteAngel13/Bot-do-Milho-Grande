import { HttpProvider } from '../../../data/protocols/providers/HttpProvider'
import { MockedHttpProvider } from '../../../infra/providers/http/MockedHttpProvider'

export const makeHttpProvider = (): HttpProvider => {
  const provider = new MockedHttpProvider()
  return provider
}
