export interface MessageRepository {
  getAnswer: (message: string) => Promise<string | null>
}
