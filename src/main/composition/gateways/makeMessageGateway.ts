import { MessageGateway } from '@/data/protocols'
import { TerminalMessageGateway } from '@/infra/gateways/message/TerminalMessageGateway'

export const makeMessageGateway = (): MessageGateway => {
  const gateway = new TerminalMessageGateway()
  return gateway
}
