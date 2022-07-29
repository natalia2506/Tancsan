# ONG TANCSAN 

<h1 align="center">
  <img src="./assets/tancsan.jpeg" width="350">
<p align="center"><p>
</h1>




## Índice do Projeto

* [Projeto](#projeto)
* [Objetivo](#objetivo)
* [Tecnologias Utilizadas](#tecnologias)
* [Arquitetura MVC](#arquitetura)
* [Mapeamento das Rotas](#rotas)
* [Acesso via Heroku](#heroku)
* [Referências](#referências)
* [Autora](#autora)

---

<div id='projeto'/>

## 📝 Projeto

São descartadas no Brasil, mais de 4 milhões de toneladas de resíduos têxteis, por ano. O descarte corresponde a 5% de todos os resíduos produzidos no país. 

Existem tecidos que podem levar de 5 a 10 anos para se decompor na natureza, existe tecido que pode demorar centenas de anos para se degradar. Para além disso, os materiais utilizados na produção das peças, contaminam o solo. 

Dentre esses descartes, existem roupas que não foram utilizadas, bem como roupas que foram utilizadas poucas vezes. 

Sabemos que crianças de 0 a 6 meses de idade desenvolvem muito rápido, de modo que, uma roupinha de recém-nascido, utilizada por uma criança de até 28 dias de nascido, possivelmente não será utilizada por ela aos 4 meses de idade. Dessa forma, podemos perceber que o tempo de uso de roupas infantis são de poucos dias ou meses.  

Esse é um dos motivos para realizarmos doações, elevando, assim, o tempo de uso de roupas e itens infantis, antes que sejam definitivamente descartadas em aterros sanitários.  

Pensando nisso, nasce a  ONG Tancsan, que recebe doações de roupas e utensílios infantis. Mais especificadamente, roupas de crianças de 0 a 6 meses de idade, e utensílios, tais como cobertores, toalhas infantis, bebe conforto, carrinho de bebe e banheira. E, após a arrecadação, a ONG, realiza as doações.  

Seguindo o modelo de negócio do projeto, em um primeiro momento, a pessoa que deseja receber doações, irá se deslocar até a ONG, onde irá receber todas as orientações/informações do projeto, dicas de como poderá cuidar das roupinhas e demais itens. Será conscientizada da ação da qual irá fazer parte, e, também será informada que, posteriormente, poderá realizar doações dos itens não utilizados. 

Após toda a parte de conscientização, a pessoa será cadastrada, e, quando estiver precisando de doações, realizará seu pedido utilizando as funcionalidades que a API disponibiliza. 

A API dispõe de funcionalidades, para que a ONG possa realizar suas atividades de uma forma organizada, rápida e eficiente. Tornando ágil a logística de doação. Fazendo com que os itens não fiquem estocados na ONG por muito tempo. 

Quando a ONG receber, por exemplo, doações de macacões do tamanho médio, terá à sua disposição, a funcionalidade de encontrar clientes que fizeram pedidos de macacões. Tal funcionalidade retorna, além dos pedidos, os cadastros dos clientes. Fazendo com que a ONG possa entrar em contato com os clientes, informado que o item está disponível para ser retirado. 

O tempo de uso de uma roupinha de bebê aumentaria, ou seja, uma roupinha que antes era utilizada por poucos dias ou meses, poderá ter um tempo de uso e rotatividade maior, antes de ser descartada definitivamente. Dessa forma, podemos ajudar pessoas e contribuir com o meio ambiente.

---

<div id='objetivo'/>

### 🎯 Objetivo

O projeto visa realizar doações de roupinhas e itens infantis para pessoas em situação de vulnerabilidade social, e, para pessoas defensoras do meio ambiente. Tem por objetivo aumentar o tempo de uso de roupinhas e itens infantis, fazendo com que, uma roupinha não seja descartada no aterro sanitário com apenas poucos dias ou meses de uso. Além das doações, o projeto visa conscientizar pessoas, com foco na minimização dos danos ambientais. 

---

<div id='tecnologias'/>

 ## 🛠Tecnologias utilizadas 

 ## **Funcionalidades**

 Tecnologias utilizadas para a construção do projeto:

<p  align="justify">
<a  href="https://www.javascript.com/"><img  alt="Java Script"  src="https://img.shields.io/badge/JavaScript-blue">
<a  href="https://nodejs.org/pt-br/"><img  alt="Node version"  src="https://img.shields.io/badge/NodeJS-blue">
<a  href="https://code.visualstudio.com/"><img  alt="VsCode"  src="https://img.shields.io/badge/VSCode-blue">
<a  href="https://www.mongodb.com/cloud/atlas"><img  alt="Node version"  src="https://img.shields.io/badge/MongoDB%20Atlas-blue">
<a  href="https://www.postman.com/"><img  alt="Postman"  src="https://img.shields.io/badge/Postman-blue">
<a  href="https://git-scm.com/"><img  alt="Git version"  src="https://img.shields.io/badge/Git/GitHub-blue">
<a  href="https://dashboard.heroku.com/apps"><img  alt="Heroku"  src="https://img.shields.io/badge/Heroku-blue">

 <br>

 ## **Bibliotecas Aplicadas**

 Bibliotecas aplicadas na construção do projeto:

<p  align="justify">
<a  href="https://www.npmjs.com/"><img  alt="npm version"  src="https://img.shields.io/badge/npm-blue">
<a  href="https://expressjs.com/pt-br/"><img  alt="Express version"  src="https://img.shields.io/badge/express-4.18.1-blue">
<a  href="https://www.npmjs.com/package/cors"><img  alt="cors version"  src="https://img.shields.io/badge/cors-2.8.5-blue">
<a  href="https://www.npmjs.com/package/nodemon"><img  alt="Nodemon version"  src="https://img.shields.io/badge/nodemon-2.0.19-blue">
<a  href="https://www.npmjs.com/package/dotenv-safe"><img  alt="Dotenv-safe version"  src="https://img.shields.io/badge/dotenv-8.2.0-blue">
<a  href="https://mongoosejs.com/"><img  alt="Mongoose version"  src="https://img.shields.io/badge/mongoose-6.4.4-blue">
<a  href="https://www.npmjs.com/package/bcryptjs"><img  alt="Bcrypt version"  src="https://img.shields.io/badge/bcrypt-5.0.1-blue">
<a  href="https://www.npmjs.com/package/jsonwebtoken"><img  alt="Jsonwebtoken version"  src="https://img.shields.io/badge/jsonwebtoken-8.5.1-blue"></a>
</p>

---

<div id='arquitetura'/>

## 📁Arquitetura MVC 

```

 📁 TANCSAN-PROJETO
   |
   |-  📁 src
   |    |
   |    |- 📁 controller.js
   |         |- 📑 authController.js
   |  		 |- 📑 cadastroClienteController.js 
   |         |- 📑 logisticaEnxovalController.js
   |		 |- 📑 pedidoClienteController.js 
   |
   |    |- 📁 database
   |         |- 📑 mongoConnect.js	
   |
   |    |- 📁 middlewares
   |         |- 📑 auth.js
   |
   |    |- 📁 models
   |         |- 📑 cadastroClienteSchema.js
   |         |- 📑 ligisticaDoEnvovalSchema.js
   |         |- 📑 pedidoClienteSchema.js
   |         |- 📑 userSchema.js
   |         
   |
   |    |- 📁 routes
   |         |- 📑 CadastroClienteRoutes.js 
   |         |- 📑 logisticaEnxovalRoutes.js
   |         |- 📑 pedidoClienteRoutes.js 
   |         |- 📑 userRoutes.js
   |         
   |
   |    |- 📑 app.js
   |
   |    
   |
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 README.md
   |- 📑 server.js
   
```

---

<div id='rotas'/>

## 🗺 Mapeamento das rotas

## 🧾Cadastro de usuário

Método: `POST`

### 📥 Requisição (rota):
```
http://localhost:8080/usuario/criar
```

### 📜 Parâmetros (body):
*Parâmetros obrigatórios.
```json

{
    "name":"Maria Oliveira",
    "email": "maria@gmail.com",
    "password": "1234"
}
```

### 📤 Resposta:
Exemplo:
```json
{
    "name": "Maria Oliveira",
    "email": "maria@gmail.com",
    "password": "$2b$10$cbrZon3YnAfsgETm4e0YmuOmwB2vma3jErsX/df3bVTRlZK.QijJa",
    "createdAt": "2022-07-23T14:41:51.986Z",
    "_id": "62dc11bdb9da4707ac785b61",
    "__v": 0
}
```

| Método HTTP  | Endpoint                | 
| ------------ | ----------------------- |         
| GET          | `/todos`                | 
| PUT          | `/atualizar/:id`        |
| DELETE       | `/deletar/: id`         |


---

## 🧾Login

Método: `POST`

### 📥 Requisição (rota):
```
http://localhost:8080/usuario/login
```

### 📜 Parâmetros (body):
*Parâmetros obrigatórios.
```json

{
 "email": "maria@gmail.com",
 "password": "1234"
}
```

### 📤 Resposta:
Exemplo:
```json
{
  "message": "Login autorizado",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTWFyaWEgT2xpdmVpcmEiLCJpYXQiOjE2NTg1OTAwNjJ9.ohJ3y6fA-H8kO-awylHOaF1r5_GGXhugy04foTkvPyQ"
}
```

---

## 🧾Cadastro do cliente que irá receber a doação

Método: `POST`

### 📥 Requisição (rota):
```
http://localhost:8080/cadastroCliente/criar
```
### 📜 Autorização (Headeres)
headers obrigatório

| Key           | Value        | Description          |
| -----------   | -----------  | -----------          |
| Authorization | Baerer token | token de autorizacao |

### 📜 Parâmetros (body):
*Parâmetros obrigatórios.
```json

{
    "name": "Maria Oliveira",
    "socialName":"",
    "identity":"22.222.222",
    "telephone": "22222-2222",
    "email": "maria@gmail.com",
    "address":"Bairro Luz/MG",
    "note":"Tem uma filha de 2 meses"
}
```

### 📤 Resposta:
Exemplo:
```json
{
    "message": "Cliente cadastrado com sucesso:",
    "saveClient": {
        "name": "Maria Oliveira",
        "socialName": "",
        "identity": "22.222.222",
        "telephone": "22222-2222",
        "email": "maria@gmail.com",
        "address": "Bairro Luz/MG",
        "note": "Tem uma filha de 2 meses",
        "_id": "62dc1560b9da4707ac785b65",
        "createdAt": "2022-07-23T15:36:00.398Z",
        "updatedAt": "2022-07-23T15:36:00.398Z",
        "__v": 0
    }
}
```

---

## Lista dos clientes cadastrados na base de dados
 
Método: `GET`

### 📥 Requisição (rota):
```
http://localhost:8080/cadastroCliente/todos 
```

### 📜 Autorização (Headeres)
headers obrigatório

| Key           | Value        | Description          |
| -----------   | -----------  | -----------          |
| Authorization | Baerer token | token de autorizacao |

### 📤 Resposta:
Exemplo:
```json
[
    {
        "_id": "62dc1560b9da4707ac785b65",
        "name": "Maria Oliveira",
        "socialName": "",
        "identity": "22.222.222",
        "telephone": "22222-2222",
        "email": "maria@gmail.com",
        "address": "Bairro Luz/MG",
        "note": "Tem uma filha de 2 meses",
        "createdAt": "2022-07-23T15:36:00.398Z",
        "updatedAt": "2022-07-23T15:36:00.398Z",
        "__v": 0
    },
    {
        "_id": "62dc165eb9da4707ac785b67",
        "name": "Ricardo Ribeiro",
        "socialName": "",
        "identity": "33.333.333",
        "telephone": "33333-3333",
        "email": "ricardo@gmail.com",
        "address": "Bairro Rio/MG",
        "note": "Tem um filho de 2 semanas",
        "createdAt": "2022-07-23T15:40:14.777Z",
        "updatedAt": "2022-07-23T15:40:14.777Z",
        "__v": 0
    },
    {
        "_id": "62dc16d7b9da4707ac785b69",
        "name": "Rita Santos",
        "socialName": "",
        "identity": "44.444.444",
        "telephone": "44444-4444",
        "email": "rita@gmail.com",
        "address": "Bairro Estrela/MG",
        "note": "Tem um filho de 6 meses",
        "createdAt": "2022-07-23T15:42:15.899Z",
        "updatedAt": "2022-07-23T15:42:15.899Z",
        "__v": 0
    }
]
```

---

## Encontrar cadastro de cliente pelo id
 
Método: `GET`

### 📥 Requisição (rota):
```
http://localhost:8080/cadastroCliente/porId/:id
```

### 📜 Autorização (Headeres)
headers obrigatório

| Key           | Value        | Description          |
| -----------   | -----------  | -----------          |
| Authorization | Baerer token | token de autorizacao |

### 📤 Resposta:
Exemplo:
```json
{
    "message": "Cliente:",
    "client": {
        "_id": "62dc16d7b9da4707ac785b69",
        "name": "Rita Santos",
        "socialName": "",
        "identity": "44.444.444",
        "telephone": "44444-4444",
        "email": "rita@gmail.com",
        "address": "Bairro Estrela/MG",
        "note": "Tem um filho de 6 meses",
        "createdAt": "2022-07-23T15:42:15.899Z",
        "updatedAt": "2022-07-23T15:42:15.899Z",
        "__v": 0
    }
}
```

---

## 🧾Atualizar dados do cadastro de cliente cadastrado na base de dados"

Método: `PUT`

### 📥 Requisição (rota):
```
http://localhost:8080/cadastroCliente/atualizar/:id
```
### 📜 Autorização (Headeres)
headers obrigatório

| Key           | Value        | Description          |
| -----------   | -----------  | -----------          |
| Authorization | Baerer token | token de autorizacao |

### 📜 Parâmetros (body):
*Parâmetros (especifique o que deseja atualizar).
```json

{
    "address":"Bairro Ribeirinho Terra"
}
```

### 📤 Resposta:
Exemplo:
```json
{
    "message": "Atualização de dados do cliente realizada com sucesso:",
    "saveClient": {
        "_id": "62dc1560b9da4707ac785b65",
        "name": "Maria Oliveira",
        "socialName": "",
        "identity": "22.222.222",
        "telephone": "22222-2222",
        "email": "maria@gmail.com",
        "address": "Bairro Ribeirinho Terra",
        "note": "Tem uma filha de 2 meses",
        "createdAt": "2022-07-23T15:36:00.398Z",
        "updatedAt": "2022-07-23T15:51:14.235Z",
        "__v": 0
    }
}
```
---

## 🗑 Deletar cadastro de cliente cadastrado na base de dados

Método: `DELETE`

### 📥 Requisição (rota):
```
http://localhost:8080/cadastroCliente/deletar/:id
```

### 📜 Autorização (Headeres)
headers obrigatório

| Key           | Value        | Description          |
| -----------   | -----------  | -----------          |
| Authorization | Baerer token | token de autorizacao |

### 📤 Resposta:
Exemplo:
```json
{
    "message": "Cliente deletado com sucesso:",
    "findClient": {
        "_id": "62dc16d7b9da4707ac785b69",
        "name": "Rita Santos",
        "socialName": "",
        "identity": "44.444.444",
        "telephone": "44444-4444",
        "email": "rita@gmail.com",
        "address": "Bairro Estrela/MG",
        "note": "Tem um filho de 6 meses",
        "createdAt": "2022-07-23T15:42:15.899Z",
        "updatedAt": "2022-07-23T15:42:15.899Z",
        "__v": 0
    }
}
```
---

## 🧾Cadastro de pedido do cliente 

Método: `POST`

### 📥 Requisição (rota):
```
http://localhost:8080/pedido/criar
```

### 📜 Autorização (Headeres)
headers obrigatório

| Key           | Value        | Description          |
| -----------   | -----------  | -----------          |
| Authorization | Baerer token | token de autorizacao |

### 📜 Parâmetros (body):
*Parâmetros obrigatórios.
```json

{
   "shortSleeveBodysuit": true,
   "longSleeveBodysuit": false,
   "pants": true,
    "shortSleeveTShirt": true,
    "longSleeveShirt": false,
    "shortJumpsuit": false,
    "longSuit": true,
    "socks": true,
    "cradle": false,
    "blanket": false,
    "babyCarriagem": false,
    "email": "maria@gmail.com",
    "cadastro": "62dc1560b9da4707ac785b65"
}
```

### 📤 Resposta:
Exemplo:
```json
{
    "message": "Pedido cadastrado com sucesso:",
    "saveOrder": {
        "shortSleeveBodysuit": true,
        "longSleeveBodysuit": false,
        "pants": true,
        "shortSleeveTShirt": true,
        "longSleeveShirt": false,
        "shortJumpsuit": false,
        "longSuit": true,
        "socks": true,
        "cradle": false,
        "blanket": false,
        "babyCarriagem": false,
        "email": "maria@gmail.com",
        "cadastro": "62dc1560b9da4707ac785b65",
        "_id": "62dc1b4bb9da4707ac785b72",
        "createdAt": "2022-07-23T16:01:15.948Z",
        "updatedAt": "2022-07-23T16:01:15.948Z",
        "__v": 0
    }
}
```

---

## Encontrar pedido de cliente pelo id
 
Método: `GET`

### 📥 Requisição (rota):
```
http://localhost:8080/pedido/porId/:id
```

### 📜 Autorização (Headeres)
headers obrigatório

| Key           | Value        | Description          |
| -----------   | -----------  | -----------          |
| Authorization | Baerer token | token de autorizacao |

### 📤 Resposta:
Exemplo:
```json
{
    "message": "Pedido:",
    "findRequest": {
        "_id": "62dc1beab9da4707ac785b75",
        "shortSleeveBodysuit": false,
        "longSleeveBodysuit": true,
        "pants": true,
        "shortSleeveTShirt": false,
        "longSleeveShirt": false,
        "shortJumpsuit": false,
        "longSuit": true,
        "socks": true,
        "cradle": false,
        "blanket": false,
        "babyCarriagem": false,
        "email": "ricardo@gmail.com",
        "cadastro": {
            "_id": "62dc165eb9da4707ac785b67",
            "name": "Ricardo Ribeiro",
            "socialName": "",
            "identity": "33.333.333",
            "telephone": "33333-3333",
            "email": "ricardo@gmail.com",
            "address": "Bairro Rio/MG",
            "note": "Tem um filho de 2 semanas",
            "createdAt": "2022-07-23T15:40:14.777Z",
            "updatedAt": "2022-07-23T15:40:14.777Z",
            "__v": 0
        },
        "createdAt": "2022-07-23T16:03:55.105Z",
        "updatedAt": "2022-07-23T16:03:55.105Z",
        "__v": 0
    }
}
```

---

## 🧾Atualizar dados do pedido de cliente cadastrado na base de dados"

Método: `PUT`

### 📥 Requisição (rota):
```
http://localhost:8080/pedido/atualizar/:id
```
### 📜 Autorização (Headeres)
headers obrigatório

| Key           | Value        | Description          |
| -----------   | -----------  | -----------          |
| Authorization | Baerer token | token de autorizacao |

### 📜 Parâmetros (body):
*Parâmetros (especifique o que deseja atualizar).

​```json
{
    "longSleeveBodysuit": true
}
```

### 📤 Resposta:
Exemplo:
```json
{
    "message": "Atualização do pedido realizada com sucesso:",
    "saveRequest": {
        "_id": "62dc1b4bb9da4707ac785b72",
        "shortSleeveBodysuit": true,
        "longSleeveBodysuit": true,
        "pants": true,
        "shortSleeveTShirt": true,
        "longSleeveShirt": false,
        "shortJumpsuit": false,
        "longSuit": true,
        "socks": true,
        "cradle": false,
        "blanket": false,
        "babyCarriagem": false,
        "email": "maria@gmail.com",
        "cadastro": {
            "_id": "62dc1560b9da4707ac785b65",
            "name": "Maria Oliveira",
            "socialName": "",
            "identity": "22.222.222",
            "telephone": "22222-2222",
            "email": "maria@gmail.com",
            "address": "Bairro Ribeirinho Terra",
            "note": "Tem uma filha de 2 meses",
            "createdAt": "2022-07-23T15:36:00.398Z",
            "updatedAt": "2022-07-23T15:51:14.235Z",
            "__v": 0
        },
        "createdAt": "2022-07-23T16:01:15.948Z",
        "updatedAt": "2022-07-23T19:20:43.481Z",
        "__v": 0
    }
}
```
---

## 🗑 Deletar cadastro de pedido

Método: `DELETE`

### 📥 Requisição (rota):
```
http://localhost:8080/pedido/deletar/:id
```
### 📜 Autorização (Headeres)
headers obrigatório

| Key           | Value        | Description          |
| -----------   | -----------  | -----------          |
| Authorization | Baerer token | token de autorizacao |

### 📤 Resposta:
Exemplo:
```json
{
    "message": "Pedido deletado com sucesso:",
    "findRequest": {
        "_id": "62dc1beab9da4707ac785b75",
        "shortSleeveBodysuit": true,
        "longSleeveBodysuit": true,
        "pants": true,
        "shortSleeveTShirt": false,
        "longSleeveShirt": false,
        "shortJumpsuit": false,
        "longSuit": true,
        "socks": true,
        "cradle": false,
        "blanket": false,
        "babyCarriagem": false,
        "email": "ricardo@gmail.com",
        "cadastro": {
            "_id": "62dc165eb9da4707ac785b67",
            "name": "Ricardo Ribeiro",
            "socialName": "",
            "identity": "33.333.333",
            "telephone": "33333-3333",
            "email": "ricardo@gmail.com",
            "address": "Bairro Rio/MG",
            "note": "Tem um filho de 2 semanas",
            "createdAt": "2022-07-23T15:40:14.777Z",
            "updatedAt": "2022-07-23T15:40:14.777Z",
            "__v": 0
        },
        "createdAt": "2022-07-23T16:03:55.105Z",
        "updatedAt": "2022-07-23T16:15:40.404Z",
        "__v": 0
    }
}
```

---

## Encontrar pedido por item
 
Método: `GET`

### 📥 Requisição (rota):
```
http://localhost:8080/logisticaEnxoval/shortSleeveBodysuit
```

### 📜 Autorização (Headeres)
headers obrigatório

| Key           | Value        | Description          |
| -----------   | -----------  | -----------          |
| Authorization | Baerer token | token de autorizacao |

### 📜 Parâmetros (body):
Query Params.
```
  Key: shortSleeveBodysuit
  Value: true
```
### 📤 Resposta:
Exemplo:
```json
[
    {
        "_id": "62dc1b4bb9da4707ac785b72",
        "shortSleeveBodysuit": true,
        "longSleeveBodysuit": true,
        "pants": true,
        "shortSleeveTShirt": true,
        "longSleeveShirt": false,
        "shortJumpsuit": false,
        "longSuit": true,
        "socks": true,
        "cradle": false,
        "blanket": false,
        "babyCarriagem": false,
        "email": "maria@gmail.com",
        "cadastro": {
            "_id": "62dc1560b9da4707ac785b65",
            "name": "Maria Oliveira",
            "socialName": "",
            "identity": "22.222.222",
            "telephone": "22222-2222",
            "email": "maria@gmail.com",
            "address": "Bairro Ribeirinho Terra",
            "note": "Tem uma filha de 2 meses",
            "createdAt": "2022-07-23T15:36:00.398Z",
            "updatedAt": "2022-07-23T15:51:14.235Z",
            "__v": 0
        },
        "createdAt": "2022-07-23T16:01:15.948Z",
        "updatedAt": "2022-07-23T19:20:43.481Z",
        "__v": 0
    }
]
```
| Método HTTP  | Endpoint                | 
| ------------ | ----------------------- | 
| GET          | `/longSleeveBodysuit`   | 
| GET          | `/pants`                | 
| GET          | `/shortSleeveTShirt`    | 
| GET          | `/longSleeveShirt`      |
| GET          | `/longshortJumpsuit`    |
| GET          | `/longSuit`             | 
| GET          | `/socks`                |
| GET          | `/cradle`               |
| GET          | `/blanket`              | 
| GET          | `/babyCarriagem`        |
| GET          | `/email`                |

---

## Lista de pedidos dos clientes
 
Método: `GET`

### 📥 Requisição (rota):
```
http://localhost:8080/logisticaEnxoval/todosPedidos
```

### 📜 Autorização (Headeres)
headers obrigatório

| Key           | Value        | Description          |
| -----------   | -----------  | -----------          |
| Authorization | Baerer token | token de autorizacao |

### 📤 Resposta:
Exemplo:
```json
[
  {
    "message": "Lista de pedidos",
    "findRequest": [
        {
            "_id": "62dc1b4bb9da4707ac785b72",
            "shortSleeveBodysuit": true,
            "longSleeveBodysuit": true,
            "pants": true,
            "shortSleeveTShirt": true,
            "longSleeveShirt": false,
            "shortJumpsuit": false,
            "longSuit": true,
            "socks": true,
            "cradle": false,
            "blanket": false,
            "babyCarriagem": false,
            "email": "maria@gmail.com",
            "cadastro": {
                "_id": "62dc1560b9da4707ac785b65",
                "name": "Maria Oliveira",
                "socialName": "",
                "identity": "22.222.222",
                "telephone": "22222-2222",
                "email": "maria@gmail.com",
                "address": "Bairro Ribeirinho Terra",
                "note": "Tem uma filha de 2 meses",
                "createdAt": "2022-07-23T15:36:00.398Z",
                "updatedAt": "2022-07-23T15:51:14.235Z",
                "__v": 0
            },
            "createdAt": "2022-07-23T16:01:15.948Z",
            "updatedAt": "2022-07-23T19:20:43.481Z",
            "__v": 0
        },
        {
            "_id": "62dc4b2f5abc28157bbf1882",
            "shortSleeveBodysuit": false,
            "longSleeveBodysuit": false,
            "pants": true,
            "shortSleeveTShirt": false,
            "longSleeveShirt": false,
            "shortJumpsuit": false,
            "longSuit": true,
            "socks": true,
            "cradle": false,
            "blanket": false,
            "babyCarriagem": false,
            "email": "ricardo@gmail.com",
            "cadastro": {
                "_id": "62dc165eb9da4707ac785b67",
                "name": "Ricardo Ribeiro",
                "socialName": "",
                "identity": "33.333.333",
                "telephone": "33333-3333",
                "email": "ricardo@gmail.com",
                "address": "Bairro Rio/MG",
                "note": "Tem um filho de 2 semanas",
                "createdAt": "2022-07-23T15:40:14.777Z",
                "updatedAt": "2022-07-23T15:40:14.777Z",
                "__v": 0
            },
            "createdAt": "2022-07-23T19:25:35.599Z",
            "updatedAt": "2022-07-23T19:25:35.599Z",
            "__v": 0
        }
    ]
}
    
]
```

---

## 🧾Cadastro de Kit-enxoval

Método: `POST`

### 📥 Requisição (rota):
```
http://localhost:8080/logisticaEnxoval/criar
```

### 📜 Autorização (Headeres)
headers obrigatório

| Key           | Value        | Description          |
| -----------   | -----------  | -----------          |
| Authorization | Baerer token | token de autorizacao |

### 📜 Parâmetros (body):
*Parâmetros obrigatórios.
```json

{
   "shortSleeveBodysuit": true,
   "longSleeveBodysuit": true,
   "pants": false,
    "shortSleeveTShirt": true,
    "longSleeveShirt": false,
    "shortJumpsuit": false,
    "longSuit": true,
    "socks": true,
    "cradle": false,
    "blanket": false,
    "babyCarriagem": true,
    "pedido":"62dc1b4bb9da4707ac785b72",
    "cadastro": "62dc1560b9da4707ac785b65",
    "place": "armário 12"
}
```

### 📤 Resposta:
Exemplo:
```json
{
    "message": "Kit-enxoval cadastrado com sucesso:",
    "saveTrousseau": {
        "shortSleeveBodysuit": true,
        "longSleeveBodysuit": true,
        "pants": false,
        "shortSleeveTShirt": true,
        "longSleeveShirt": false,
        "shortJumpsuit": false,
        "longSuit": true,
        "socks": true,
        "cradle": false,
        "blanket": false,
        "babyCarriagem": true,
        "pedido": "62dc1b4bb9da4707ac785b72",
        "cadastro": "62dc1560b9da4707ac785b65",
        "place": "armário 12",
        "_id": "62dc4db35abc28157bbf188d",
        "createdAt": "2022-07-23T19:36:19.647Z",
        "updatedAt": "2022-07-23T19:36:19.647Z",
        "__v": 0
    }
}
```

---

## Lista de todos os kits cadastrados
 
Método: `GET`

### 📥 Requisição (rota):
```
http://localhost:8080/logisticaEnxoval/todos
```

### 📜 Autorização (Headeres)
headers obrigatório

| Key           | Value        | Description          |
| -----------   | -----------  | -----------          |
| Authorization | Baerer token | token de autorizacao |

### 📤 Resposta:
Exemplo:
```json
[
 {
    "message": "Lista de kits",
    "trousseau": [
        {
            "_id": "62dc4db35abc28157bbf188d",
            "shortSleeveBodysuit": true,
            "longSleeveBodysuit": true,
            "pants": false,
            "shortSleeveTShirt": true,
            "longSleeveShirt": false,
            "shortJumpsuit": false,
            "longSuit": true,
            "socks": true,
            "cradle": false,
            "blanket": false,
            "babyCarriagem": true,
            "pedido": {
                "_id": "62dc1b4bb9da4707ac785b72",
                "shortSleeveBodysuit": true,
                "longSleeveBodysuit": true,
                "pants": true,
                "shortSleeveTShirt": true,
                "longSleeveShirt": false,
                "shortJumpsuit": false,
                "longSuit": true,
                "socks": true,
                "cradle": false,
                "blanket": false,
                "babyCarriagem": false,
                "email": "maria@gmail.com",
                "cadastro": "62dc1560b9da4707ac785b65",
                "createdAt": "2022-07-23T16:01:15.948Z",
                "updatedAt": "2022-07-23T19:20:43.481Z",
                "__v": 0
            },
            "cadastro": {
                "_id": "62dc1560b9da4707ac785b65",
                "name": "Maria Oliveira",
                "socialName": "",
                "identity": "22.222.222",
                "telephone": "22222-2222",
                "email": "maria@gmail.com",
                "address": "Bairro Ribeirinho Terra",
                "note": "Tem uma filha de 2 meses",
                "createdAt": "2022-07-23T15:36:00.398Z",
                "updatedAt": "2022-07-23T15:51:14.235Z",
                "__v": 0
            },
            "place": "armário 12",
            "createdAt": "2022-07-23T19:36:19.647Z",
            "updatedAt": "2022-07-23T19:36:19.647Z",
            "__v": 0
        },
        {
            "_id": "62dc4ee65abc28157bbf1892",
            "shortSleeveBodysuit": false,
            "longSleeveBodysuit": false,
            "pants": true,
            "shortSleeveTShirt": false,
            "longSleeveShirt": false,
            "shortJumpsuit": false,
            "longSuit": true,
            "socks": true,
            "cradle": false,
            "blanket": false,
            "babyCarriagem": false,
            "pedido": {
                "_id": "62dc4b2f5abc28157bbf1882",
                "shortSleeveBodysuit": false,
                "longSleeveBodysuit": false,
                "pants": true,
                "shortSleeveTShirt": false,
                "longSleeveShirt": false,
                "shortJumpsuit": false,
                "longSuit": true,
                "socks": true,
                "cradle": false,
                "blanket": false,
                "babyCarriagem": false,
                "email": "ricardo@gmail.com",
                "cadastro": "62dc165eb9da4707ac785b67",
                "createdAt": "2022-07-23T19:25:35.599Z",
                "updatedAt": "2022-07-23T19:25:35.599Z",
                "__v": 0
            },
            "cadastro": {
                "_id": "62dc165eb9da4707ac785b67",
                "name": "Ricardo Ribeiro",
                "socialName": "",
                "identity": "33.333.333",
                "telephone": "33333-3333",
                "email": "ricardo@gmail.com",
                "address": "Bairro Rio/MG",
                "note": "Tem um filho de 2 semanas",
                "createdAt": "2022-07-23T15:40:14.777Z",
                "updatedAt": "2022-07-23T15:40:14.777Z",
                "__v": 0
            },
            "place": "armário 15",
            "createdAt": "2022-07-23T19:41:26.910Z",
            "updatedAt": "2022-07-23T19:41:26.910Z",
            "__v": 0
        }
    ]
}  
]
```

---

## Encontrar kit-enxoval pelo id
 
Método: `GET`

### 📥 Requisição (rota):
```
http://localhost:8080/logisticaEnxoval/porId/:id
```

### 📜 Autorização (Headeres)
headers obrigatório

| Key           | Value        | Description          |
| -----------   | -----------  | -----------          |
| Authorization | Baerer token | token de autorizacao |

### 📤 Resposta:
Exemplo:
```json
{
    "message": "Kit-enxoval:",
    "trousseau": {
        "_id": "62dc4db35abc28157bbf188d",
        "shortSleeveBodysuit": true,
        "longSleeveBodysuit": true,
        "pants": false,
        "shortSleeveTShirt": true,
        "longSleeveShirt": false,
        "shortJumpsuit": false,
        "longSuit": true,
        "socks": true,
        "cradle": false,
        "blanket": false,
        "babyCarriagem": true,
        "pedido": {
            "_id": "62dc1b4bb9da4707ac785b72",
            "shortSleeveBodysuit": true,
            "longSleeveBodysuit": true,
            "pants": true,
            "shortSleeveTShirt": true,
            "longSleeveShirt": false,
            "shortJumpsuit": false,
            "longSuit": true,
            "socks": true,
            "cradle": false,
            "blanket": false,
            "babyCarriagem": false,
            "email": "maria@gmail.com",
            "cadastro": "62dc1560b9da4707ac785b65",
            "createdAt": "2022-07-23T16:01:15.948Z",
            "updatedAt": "2022-07-23T19:20:43.481Z",
            "__v": 0
        },
        "cadastro": {
            "_id": "62dc1560b9da4707ac785b65",
            "name": "Maria Oliveira",
            "socialName": "",
            "identity": "22.222.222",
            "telephone": "22222-2222",
            "email": "maria@gmail.com",
            "address": "Bairro Ribeirinho Terra",
            "note": "Tem uma filha de 2 meses",
            "createdAt": "2022-07-23T15:36:00.398Z",
            "updatedAt": "2022-07-23T15:51:14.235Z",
            "__v": 0
        },
        "place": "armário 12",
        "createdAt": "2022-07-23T19:36:19.647Z",
        "updatedAt": "2022-07-23T19:36:19.647Z",
        "__v": 0
    }
}
```

---

## 🧾Atualizar dados do Kit-enxoval"

Método: `PUT`

### 📥 Requisição (rota):
```
http://localhost:8080/logisticaEnxoval/atualizar/:id
```

### 📜 Autorização (Headeres)
headers obrigatório

| Key           | Value        | Description          |
| -----------   | -----------  | -----------          |
| Authorization | Baerer token | token de autorizacao |

### 📜 Parâmetros (body):
*Parâmetros (especifique o que deseja atualizar).
```json
{
 "babyCarriagem": false
}
```

### 📤 Resposta:
Exemplo:
```json
{
    "message": "Atualização do kit do enxoval realizada com sucesso:",
    "saveTrousseau": {
        "_id": "62dc4db35abc28157bbf188d",
        "shortSleeveBodysuit": true,
        "longSleeveBodysuit": true,
        "pants": false,
        "shortSleeveTShirt": true,
        "longSleeveShirt": false,
        "shortJumpsuit": false,
        "longSuit": true,
        "socks": true,
        "cradle": false,
        "blanket": false,
        "babyCarriagem": false,
        "pedido": {
            "_id": "62dc1b4bb9da4707ac785b72",
            "shortSleeveBodysuit": true,
            "longSleeveBodysuit": true,
            "pants": true,
            "shortSleeveTShirt": true,
            "longSleeveShirt": false,
            "shortJumpsuit": false,
            "longSuit": true,
            "socks": true,
            "cradle": false,
            "blanket": false,
            "babyCarriagem": false,
            "email": "maria@gmail.com",
            "cadastro": "62dc1560b9da4707ac785b65",
            "createdAt": "2022-07-23T16:01:15.948Z",
            "updatedAt": "2022-07-23T19:20:43.481Z",
            "__v": 0
        },
        "cadastro": {
            "_id": "62dc1560b9da4707ac785b65",
            "name": "Maria Oliveira",
            "socialName": "",
            "identity": "22.222.222",
            "telephone": "22222-2222",
            "email": "maria@gmail.com",
            "address": "Bairro Ribeirinho Terra",
            "note": "Tem uma filha de 2 meses",
            "createdAt": "2022-07-23T15:36:00.398Z",
            "updatedAt": "2022-07-23T15:51:14.235Z",
            "__v": 0
        },
        "place": "armário 12",
        "createdAt": "2022-07-23T19:36:19.647Z",
        "updatedAt": "2022-07-23T19:36:19.647Z",
        "__v": 0
    }
}
```
---

## 🗑 Deletar cadastro do kit-enxoval

Método: `DELETE`

### 📥 Requisição (rota):
```
http://localhost:8080/logisticaEnxoval/deletar/:id
```

### 📜 Autorização (Headeres)
headers obrigatório

| Key           | Value        | Description          |
| -----------   | -----------  | -----------          |
| Authorization | Baerer token | token de autorizacao |

### 📤 Resposta:
Exemplo:
```json
{
    "message": "Kit-enxoval deletado com sucesso:",
    "findTrousseau": {
        "_id": "62dc4ee65abc28157bbf1892",
        "shortSleeveBodysuit": false,
        "longSleeveBodysuit": false,
        "pants": true,
        "shortSleeveTShirt": false,
        "longSleeveShirt": false,
        "shortJumpsuit": false,
        "longSuit": true,
        "socks": true,
        "cradle": false,
        "blanket": false,
        "babyCarriagem": false,
        "pedido": {
            "_id": "62dc4b2f5abc28157bbf1882",
            "shortSleeveBodysuit": false,
            "longSleeveBodysuit": false,
            "pants": true,
            "shortSleeveTShirt": false,
            "longSleeveShirt": false,
            "shortJumpsuit": false,
            "longSuit": true,
            "socks": true,
            "cradle": false,
            "blanket": false,
            "babyCarriagem": false,
            "email": "ricardo@gmail.com",
            "cadastro": "62dc165eb9da4707ac785b67",
            "createdAt": "2022-07-23T19:25:35.599Z",
            "updatedAt": "2022-07-23T19:25:35.599Z",
            "__v": 0
        },
        "cadastro": {
            "_id": "62dc165eb9da4707ac785b67",
            "name": "Ricardo Ribeiro",
            "socialName": "",
            "identity": "33.333.333",
            "telephone": "33333-3333",
            "email": "ricardo@gmail.com",
            "address": "Bairro Rio/MG",
            "note": "Tem um filho de 2 semanas",
            "createdAt": "2022-07-23T15:40:14.777Z",
            "updatedAt": "2022-07-23T15:40:14.777Z",
            "__v": 0
        },
        "place": "armário 15",
        "createdAt": "2022-07-23T19:41:26.910Z",
        "updatedAt": "2022-07-23T19:41:26.910Z",
        "__v": 0
    }
}
```

<div id='heroku'/>

## 🗺 Acesso via Heroku

 * Heroku: https://tancsan.herokuapp.com/
 ---

<div id='referências'/>

## 🗺 Referências

<h5>

> <a href="https://www.cnnbrasil.com.br/business/brasil-descarta-mais-de-4-milhoes-de-toneladas-de-residuos-texteis-por-ano/">CNN Brasil</p></a>

> <a href="https://exame.com/pop/lixao-da-moda-40-toneladas-de-roupas-se-acumulam-no-deserto-do-atacama/">Exame</p></a>

> <a href="https://github.com/xeniabarreto/FarmaBem/blob/main/README.md"><p align="">Inspiração Readme - Xênia Barreto</p></a>

> <a href="https://github.com/anacarolliny/ReprogramaProjetoFinal/blob/main/README.md"><p align="">Inspiração Readme - Ana Carolliny</p></a>

</h5>

 ---


<div id='autora'/>

## 📝 Autora


<img style="border-radius: 20%;" src="https://unavatar.now.sh/github/natalia2506" width="200px;" alt=""/> </td><br> 

<br>

Criado por **Natália Santos**.

<br>

  <div>
    <a href="https://www.linkedin.com/in/natália-santos-837765164/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>  
    <a href = "https://github.com/natalia2506/"><img src="https://img.shields.io/badge/GitHub-black?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>
    <a href = "mailto:nataliacs2507@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
 </div>

---