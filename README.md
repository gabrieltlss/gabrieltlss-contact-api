# API para contato usando SendGrid

## Descrição

API para contato contruída com Node.js e Express com mensagens enviados com o SendGrid.

## Instalação e uso

git clone https://github.com/gabrieltlss/gabrieltlss-contact-api

cd gabrieltlss-contact-api

npm install

npm run start

- Variáveis de ambientes necessárias
    - SEND_GRID_API
    - PORT (geralmente 3000, se projeto for executado localmente)
    - EMAIL (opcional; e-mail pode ser informado diretamente no objeto de mensagem)

## Rotas

O projeto possui uma única rota que recebe nome, email e mensagem para contato.

/contact - método POST. 

Exemplo de rota em servidor local: "http://localhost:3000/contact".

Recebe:

{

  "name": "Gabriel",

  "email": "exemplo@email.com",

  "message": "Olá, esta é uma mensagem de teste."

}

## Deploy / URL

API em produção: https://gabrieltlss-contact-api.onrender.com/

A API foi gerada pelo Render, que hospeda este back-end.

## Tecnologias utilizadas

JavaScricpt, Node.js, Express, SendGrid e Render para hospedagem do back-end.

## Licença

Este projeto está licenciado sob a [Licença MIT](./LICENSE).