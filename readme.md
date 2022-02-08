# Repositories

Classes que estão focadas em manipular dados, como por exemplo

```ts
interface LogRepository {
  saveInitLog(): void {}
}

class InLocalFileLogRepository implements LogRepository {
  saveInitLog(): void {
    //Aqui vocês implementam o método de salvar o log usando
    //fs.withFileSync e essas coisas
  }
}
```