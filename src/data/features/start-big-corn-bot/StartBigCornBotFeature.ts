import { Feature } from 'domain/models/protocols/Feature'

export class StartBigCornBotFeature implements Feature<void> {
  async perform (data: void): Promise<void> {
    console.log('Starting big corn bot')
  }
}
