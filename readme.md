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

Próxima aula: Vamos estudar extensão de classes abstratas.

# Estrutura de Pastas

```typescript
APP/
├─ src/
│  ├─ application/
│  │  ├─ controllers/
│  ├─ data/
│  │  ├─ features/
│  │  ├─ protocols/
│  │  │  ├─ gateways/
│  │  │  ├─ providers/
│  │  │  ├─ repositories/
│  ├─ domain/
│  │  ├─ application/
│  │  │  ├─ features/
│  │  │  ├─ config/
│  │  ├─ models/
│  │  │  ├─ entities/
│  │  │  ├─ http/
│  ├─ infra/
│  │  ├─ gateways/
│  │  ├─ providers/
│  │  ├─ repositories/
│  ├─ main/
│  │  ├─ composition/
│  │  │  ├─ controllers/
│  │  │  ├─ features/
│  │  │  ├─ gateways/
│  │  │  ├─ providers/
│  │  │  ├─ repositories/
│  │  ├─ config/
│  │  ├─ ...services/
│  ├─
├─ 
```

## Application
  Essa é a zona da aplicação que vai tratar com as entradas e saidas da aplicação, é onde serão validados e enviados para a camada que faz o bagulho acontecer
### Controller
  Ele recebe valores, valida, repassa para as camadas internas e devolve para a camada de exibição ("Terminal", "Browser", "API")

## Data

  Essa é a zona onde a magia acontece, onde os dados são tratado, onde existe toda a lógica de negócio sem nenhuma implementação lógica, simplesmente a utilização de contratos que estão na pasta Protocols

  ### Feature

  Essa é a zona onde o negócio acontece, onde os dados são tratado, onde existe toda a lógica de negócio sem nenhuma implementação lógica, simplesmente a utilização de contratos que estão na pasta Protocols

  ### Procotols

  - Gateways   
    Aqui ficam os contratos que são utilizados para comunicação com o mundo externo, por exemplo "Comunicação com o usuário", "Comunicação com o Facebook", "Comunicação com outra aplicação nossa", como a comunicação acontece? não importa, o contrato só diz que ela acontece, na implementação decidimos se será com API, GRPC, SINAL DE FUMAÇA, LIGAÇÃO TELEFONICA
  - Repositories   
    É um Gateway super específico para o Banco de Dados, ele simplesmente é uma abstração dos comandos que devem ser enviados ao banco de dados
  - Providers   
    São provedores de funções, como: Sanitizers, DateTime, Encriptação, sei lá, mesmo que planejem usar funções nativas do Node, implementem a interface, para que se no futuro uma Lib melhor for lançada ou a função do Node pare de funcionar, seja fácil de trocar

## Domain

  Aqui devem ficar simplesmente os dados Puros, as assinaturas, as configurações, todos podem depender dela, mas ela não pode depender de ninguém
  ### Application
  - Features   
    Aqui devem ficar os DTOs (data transfer objects) que dizem o que uma Feature recebe e o que ela retorna se necessário
  - Config   
    Aqui ficam configurações gerais da aplicação, como:
      - Configurações de ambiente
      - Configurações de banco de dados
      - Configurações de autenticação
  - Models
    Aqui ficam os modelos que são usados dentro da Aplicação

## Infra
  Aqui ficam as camadas que fazem a magia acontecer, simplemente tudo que é necessário para que a aplicação funcione, tudo que está na Protocols do Data Layer deve ser implementado de forma efetiva aqui

## Main

  ### Composition

  Aqui é onde acontece o Lego, você vai juntando os bloquinhos e injetando as dependencias até ficar que a aplicação funcione e fique totalmente desacoplada

  E aqui também devem ser implementados os serviços, se vai ser usado Evento, HTTP, ou qualquer forma de I/O (entrada e saída | input and output)