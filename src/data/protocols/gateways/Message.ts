export interface MessageGateway {
  sendStartBot: () => Promise<void>
}
