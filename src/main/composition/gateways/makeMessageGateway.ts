import { ApiMessageGateway } from '@/infra/gateways/message/ApiMessageGateway'
import { MessageGateway } from '@/data/protocols'
import { makeHttpProvider } from '../providers/makeHttpProvider'
// import { TerminalMessageGateway } from '@/infra/gateways/message/TerminalMessageGateway'

export const makeMessageGateway = (): MessageGateway => {
  const httpProvider = makeHttpProvider()
  const gateway = new ApiMessageGateway(httpProvider)
  // const gateway = new TerminalMessageGateway()
  return gateway
}
