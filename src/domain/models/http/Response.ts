export interface HttpResponse<T = null> {
  body: T
  StatusCode: number
}
