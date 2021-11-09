## DEVs - Potential CRUD

Para executar o projeto, basta clonar este repositório e subir os containers via docker-compose, na raiz do mesmo.

No caso do front-end, o container até sobe, porém está havendo um erro no pacote `@emotion/styled`, o que impede o carregamento da aplicação.

Logo, é necessário entrar na pasta frontend e executar o comando: 

```bash
yarn start
```
ou

```bash
npm start
```

Como eu utilizo o docker toolbox, a URL padrão do front-end é o IP da minha docker machine. Logo, é também necessário adaptar para a URL correta. A variável responsável está no arquivo .env.