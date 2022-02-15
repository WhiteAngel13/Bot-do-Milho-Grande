export interface Feature<T, R = void> {
  perform: (data: T) => Promise<R>
}
