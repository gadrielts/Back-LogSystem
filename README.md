# Back LogSystem
Este é um projeto criado para fornecer logs de ticket de uma conversa para evitar casos comuns em solicitações de compras, reembolso, etc...

O intuito do projeto é fornecer dados salvos de conversas como participantes do chat, horário das mensagens, conteúdo da mensagem, quando o canal de suporte foi criado ou deletado.

Toda essa construção da API retorna esses dados, além de dados CRUD para o usuários que forem acessar a mesma.

# Construção do projeto
### Tecnologias
- **[Typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)**
- Dependências:
  - **[@prisma/client](https://www.prisma.io/docs/concepts/components/prisma-client)**
  - **[bcrypt](https://www.npmjs.com/package/bcrypt)**
  - **[cors](https://www.npmjs.com/package/cors)**
  - **[dotenv](https://www.npmjs.com/package/dotenv)**
  - **[express](http://expressjs.com/pt-br/)**
  - **[jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)**
- Dependências de Desenvolvimento:
  - **[prisma](https://www.prisma.io/)**
  - **[ts-node-dev](https://www.npmjs.com/package/ts-node-dev)**

### Environment variable File (**.env**)
```txt
# PORT API REST DEFAULT: 3333
PORT=3333

# DATABASE URL POSTGRESQL
DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA"

# SECRET WORD DEFAULT: password
WORD_SECRET="password"
```

# Rotas do Projeto
> Propriedades padrão
- Host: `localhost`  
- Porta: `3333`
- Headers
  - Content-Type: `application/json`
## Rota de Usuário
> PUT - Criar usuário
- Rota: `/users/create`
- Headers
  - Authorization: `Bearer ApiToken`
- Body: 
  ```json
  {
    "username": "user",
    "email": "user@example.com",
    "password": "example123"
  }
  ```

> GET - Perfil do usuário
- Rota: `/users/perfil`
- Headers
  - Authorization: `Bearer ApiToken`
- Query:
  - Email: `?email=user@example.com`
  - Username: `?username=user`

> PATCH - Atualizar usuário
- Rota: `/users/edit`
- Headers
  - Authorization: `Bearer ApiToken`
- Query:
  - Email: `?email=user@example.com`
  - Username: `?username=user`
- Body:
  ```json
  {
    "newUsername": "user1",
    "newEmail": "user1@example.com.br",
    "newPassword": "example1234"
  }
  ```

> DELETE - Apagar usuário
- Rota: `/users/delete`
- Headers
  - Authorization: `Bearer ApiToken`
- Query:
  - Email: `?email=user@example.com`
  - Username: `?username=user`

> POST - Efetuar login
- Rota: `/users/login`
 - Body:
    - Email:
      ```json
      {
        "email": "user@example.com",
        "password": "example123"
      }
      ```
    - Username:
      ```json
      {
        "username": "user",
        "password": "example123"
      }
      ```
## Rota de Logs
- Headers
  - Authorization: `Bearer ApiToken`

> GET - Pegar página de 30 itens de logs
- Rota: `/logs/all`

> GET - Conteúdo de uma log específica
- Rota: `/logs/:logId`
- Params:
  - `logId`

> GET - Baixar uma log específica
- Rota: `/logs/logId`
- Params:
  - `logId`

> DELETE - Apagar todas as logs
- Rota: `/logs/all`

> DELETE - Apagar uma log específica
- Rota: `/logs/:logId`
- Params:
  - `logId`

# Agradecimentos

## Você que leu isso até aqui...

Agradeço o seu tempo gasto com a leitura :heart:. Caso queira pode me ajudar com este projeto, fazendo recomendações do que eu posso adicionar ou remover.

Pretendo criar versões para agir em conjunto com outro ambiente de desenvolvimento.

Desde já, Obrigado!

Ass:. Henrique