import { HttpRequest, HttpResponse } from '../http'

export interface Controller<T> {
  handle: (request: HttpRequest<T>) => Promise<HttpResponse>
}
