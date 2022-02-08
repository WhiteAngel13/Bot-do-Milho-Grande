export interface HttpProvider {
  get: (url: string) => Promise<any>
  post: (url: string, body: any) => Promise<any>
}
