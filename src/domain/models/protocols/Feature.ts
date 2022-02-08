export interface Feature<T> {
  perform: (data: T) => Promise<void>
}
