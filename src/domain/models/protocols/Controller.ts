import { HttpRequest, HttpResponse } from '../http'

export interface Controller<T, R = null> {
  handle: (request: HttpRequest<T>) => Promise<HttpResponse<R>>
}
