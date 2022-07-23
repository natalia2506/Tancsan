# ONG TANCSAN 




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

Sabemos que crianças de 0 a 6 meses de idade desenvolvem muito rápido, de modo que, uma roupinha de recém-nascido, utilizada por uma criança de até 28 dias de nascido, possivelmente não será utilizada por ela aos 4 meses de idade. Dessa forma, podemos perceber que o tempo de usabilidade de roupas infantis são de poucos dias ou meses.  

Esse é um dos motivos para realizarmos doações, elevando, assim, o tempo de usabilidade de roupas e itens infantis, antes que sejam definitivamente descartadas em aterros sanitários.  

Pensando nisso, nasce a  ONG Tancsan, que recebe doações de roupas e utensílios infantis. Mais especificadamente, roupas de crianças de 0 a 6 meses de idade, e utensílios, tais como cobertores e toalhas infantis, bebe conforto, carrinho de bebe e banheira. E, após a arrecadação, realiza as doações.  

Seguindo o modelo de negócio do projeto, em um primeiro momento, a pessoa que deseja receber doações, irá se deslocar até a ong, onde irá receber todas as orientações/informações do projeto, dicas de como poderá cuidar das roupinhas e demais itens. Será conscientizada da ação da qual irá fazer parte, e, também será informada que, posteriormente, poderá realizar doações dos itens não utilizados. 

Após toda a parte de conscientização, a pessoa será cadastrada, e, quando estiver precisando de doações, realizará seu pedido utilizando as funcionalidades que a API disponibiliza. 

A API dispõe de funcionalidades, para que a Ong possa realizar suas atividades de uma forma organizada, rápida e eficiente. Tornando ágil a logística de doação. Fazendo com que os itens não fiquem estocados na Ong por muito tempo. 

Quando a Ong receber, por exemplo, doações de macacões do tamanho médio, terá à sua disposição, a funcionalidade de encontrar clientes que fizeram pedidos de macacões. Tal funcionalidade retorna, além dos pedidos, os cadastros dos clientes.  Fazendo com que a Ong possa entrar em contato com os clientes, informado que o item está disponível para ser retirado. 

O tempo de usabilidade de uma roupinha de bebê aumentaria, ou seja, uma roupinha que antes era utilizada por poucos dias ou meses, poderá ter um tempo de usabilidade e rotatividade maior, antes de ser descartada. Assim, podemos ajudar pessoas e contribuir com o meio ambiente.

---

<div id='objetivo'/>

### 🎯 Objetivo

O projeto visa aumentar o tempo de usabilidade de roupinhas e itens infantis, fazendo com que, uma roupinha não seja descartada no aterro sanitário com apenas poucos dias ou meses de uso. Tem por objetivos realizar doações das roupinhas e itens para pessoas em situação de vulnerabilidade social. 

Além das doações, o projeto visa conscientizar pessoas, com foco na minimização dos danos ambientais. 

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
    "name": "",
    "socialName":"",
    "identity":"",
    "telephone": "",
    "email": "@gmail.com",
    "address":"",
    "note":""
}
```

### 📤 Resposta:
Exemplo:
```json
{
    "message": "Cliente cadastrado com sucesso:",
    "saveClient": {
    
    "name": "",
    "socialName":"",
    "identity":"",
    "telephone": "",
    "email": "@gmail.com",
    "address":"",
    "note":"Tem uma filha de 2meses | sexo da criança: feminino",
    "id": ,
    "criadoEm": "2021-12-13T14:54:10.109Z",
    "atualizadoEm": "2021-12-13T14:54:10.109Z",
    "__v": 0
    }
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
    "name": "",
    "socialName":"",
    "identity":"",
    "telephone": "",
    "email": "@gmail.com",
    "address":"",
    "note":""
}
```

### 📤 Resposta:
Exemplo:
```json
{
    "message": "Cliente cadastrado com sucesso:",
    "saveClient": {
    
    "name": "",
    "socialName":"",
    "identity":"",
    "telephone": "",
    "email": "@gmail.com",
    "address":"",
    "note":"Tem uma filha de 2meses | sexo da criança: feminino",
    "id": ,
    "criadoEm": "2021-12-13T14:54:10.109Z",
    "atualizadoEm": "2021-12-13T14:54:10.109Z",
    "__v": 0
    }
}
```

---


















## 🧾Cadastro do cliente que irá receber a doação

Método: `POST`

### 📥 Requisição (rota):
```
http://localhost:8080/cadastroCliente/criar
```

### 📜 Parâmetros (body):
*Parâmetros obrigatórios.
```json

{
    "name": "",
    "socialName":"",
    "identity":"",
    "telephone": "",
    "email": "@gmail.com",
    "address":"",
    "note":""
}
```

### 📤 Resposta:
Exemplo:
```json
{
    "message": "Cliente cadastrado com sucesso:",
    "saveClient": {
    
    "name": "",
    "socialName":"",
    "identity":"",
    "telephone": "",
    "email": "@gmail.com",
    "address":"",
    "note":"Tem uma filha de 2meses | sexo da criança: feminino",
    "id": ,
    "criadoEm": "2021-12-13T14:54:10.109Z",
    "atualizadoEm": "2021-12-13T14:54:10.109Z",
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

### 📤 Resposta:
Exemplo:
```json
[
  {
    "message": "Cliente cadastrado com sucesso:",
    "saveClient": {
    
    "name": "",
    "socialName":"",
    "identity":"",
    "telephone": "",
    "email": "@gmail.com",
    "address":"",
    "note":"Tem uma filha de 2meses | sexo da criança: feminino",
    "id": ,
    "criadoEm": "2021-12-13T14:54:10.109Z",
   "atualizadoEm": "2021-12-13T14:54:10.109Z",
   "__v": 0
    }
}
    
]
```

---

## 🧾Atualizar dados do cadastro de cliente cadastrado na base de dados"

Método: `PUT`

### 📥 Requisição (rota):
```
http://localhost:8080/cadastroCliente/atualizar/:id

### 📜 Parâmetros (body):
*Parâmetros (especifique o que deseja atualizar).

​```json
{
    "name": "",
    "socialName":"",
    "identity":"",
    "telephone": "",
    "email": "@gmail.com",
    "address":"",
    "note":"Tem uma filha de 2meses | sexo da criança: feminino"
}
```

### 📤 Resposta:
Exemplo:
```json
{
  {
   "nome": "France Santos Figueira",
   "contato": "9999-7777",
   "email": "france@teste.com.br",
   "profissao": "Massagista",
   "area": "Saúde",
   "informacoes": "Massagem terapeutica",
   "criadoEm": "2021-12-13T14:54:10.109Z",
   "atualizadoEm": "2021-12-13T14:54:10.109Z",
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

### 📤 Resposta:
Exemplo:
```
{
    "message": "Cliente deletado com sucesso:",
    "saveClient": {
    
    "name": "",
    "socialName":"",
    "identity":"",
    "telephone": "",
    "email": "@gmail.com",
    "address":"",
    "note":"Tem uma filha de 2meses | sexo da criança: feminino",
    "id": ,
    "criadoEm": "2021-12-13T14:54:10.109Z",
   "atualizadoEm": "2021-12-13T14:54:10.109Z",
   "__v": 0
    }
```
---

























## 🧾Cadastro de pedido do cliente 

Método: `POST`

### 📥 Requisição (rota):
```
http://localhost:8080/pedido/criar
```

### 📜 Parâmetros (body):
*Parâmetros obrigatórios.
```json

{
    "name": "",
    "socialName":"",
    "identity":"",
    "telephone": "",
    "email": "@gmail.com",
    "address":"",
    "note":""
}
```

### 📤 Resposta:
Exemplo:
```json
{
    "message": "Cliente cadastrado com sucesso:",
    "saveClient": {
    
    "name": "",
    "socialName":"",
    "identity":"",
    "telephone": "",
    "email": "@gmail.com",
    "address":"",
    "note":"Tem uma filha de 2meses | sexo da criança: feminino",
    "id": ,
    "criadoEm": "2021-12-13T14:54:10.109Z",
    "atualizadoEm": "2021-12-13T14:54:10.109Z",
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

### 📤 Resposta:
Exemplo:
```json
[
  {
    "message": "Cliente cadastrado com sucesso:",
    "saveClient": {
    
    "name": "",
    "socialName":"",
    "identity":"",
    "telephone": "",
    "email": "@gmail.com",
    "address":"",
    "note":"Tem uma filha de 2meses | sexo da criança: feminino",
    "id": ,
    "criadoEm": "2021-12-13T14:54:10.109Z",
   "atualizadoEm": "2021-12-13T14:54:10.109Z",
   "__v": 0
    }
}
    
]
```

---

## 🧾Atualizar dados do pedido de cliente cadastrado na base de dados"

Método: `PUT`

### 📥 Requisição (rota):
```
http://localhost:8080/pedido/atualizar/:id

### 📜 Parâmetros (body):
*Parâmetros (especifique o que deseja atualizar).

​```json
{
    "name": "",
    "socialName":"",
    "identity":"",
    "telephone": "",
    "email": "@gmail.com",
    "address":"",
    "note":"Tem uma filha de 2meses | sexo da criança: feminino"
}
```

### 📤 Resposta:
Exemplo:
```json
{
  {
   "nome": "France Santos Figueira",
   "contato": "9999-7777",
   "email": "france@teste.com.br",
   "profissao": "Massagista",
   "area": "Saúde",
   "informacoes": "Massagem terapeutica",
   "criadoEm": "2021-12-13T14:54:10.109Z",
   "atualizadoEm": "2021-12-13T14:54:10.109Z",
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

### 📤 Resposta:
Exemplo:
```
{
    "message": "Cliente deletado com sucesso:",
    "saveClient": {
    
    "name": "",
    "socialName":"",
    "identity":"",
    "telephone": "",
    "email": "@gmail.com",
    "address":"",
    "note":"Tem uma filha de 2meses | sexo da criança: feminino",
    "id": ,
    "criadoEm": "2021-12-13T14:54:10.109Z",
   "atualizadoEm": "2021-12-13T14:54:10.109Z",
   "__v": 0
    }
```





















## Encontrar pedido por item
 
Método: `GET`

### 📥 Requisição (rota):
```
http://localhost:8080/logisticaEnxoval/shortSleeveBodysuit
```

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
    "message": "Cliente cadastrado com sucesso:",
    "saveClient": {
    
    "name": "",
    "socialName":"",
    "identity":"",
    "telephone": "",
    "email": "@gmail.com",
    "address":"",
    "note":"Tem uma filha de 2meses | sexo da criança: feminino",
    "id": ,
    "criadoEm": "2021-12-13T14:54:10.109Z",
   "atualizadoEm": "2021-12-13T14:54:10.109Z",
   "__v": 0
    }
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


## Lista de pedidos dos cliente
 
Método: `GET`

### 📥 Requisição (rota):
```
http://localhost:8080/logisticaEnxoval/todos
```

### 📤 Resposta:
Exemplo:
```json
[
  {
    "message": "Cliente cadastrado com sucesso:",
    "saveClient": {
    
    "name": "",
    "socialName":"",
    "identity":"",
    "telephone": "",
    "email": "@gmail.com",
    "address":"",
    "note":"Tem uma filha de 2meses | sexo da criança: feminino",
    "id": ,
    "criadoEm": "2021-12-13T14:54:10.109Z",
   "atualizadoEm": "2021-12-13T14:54:10.109Z",
   "__v": 0
    }
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

### 📜 Parâmetros (body):
*Parâmetros obrigatórios.
```json

{
    "name": "",
    "socialName":"",
    "identity":"",
    "telephone": "",
    "email": "@gmail.com",
    "address":"",
    "note":""
}
```

### 📤 Resposta:
Exemplo:
```json
{
    "message": "Cliente cadastrado com sucesso:",
    "saveClient": {
    
    "name": "",
    "socialName":"",
    "identity":"",
    "telephone": "",
    "email": "@gmail.com",
    "address":"",
    "note":"Tem uma filha de 2meses | sexo da criança: feminino",
    "id": ,
    "criadoEm": "2021-12-13T14:54:10.109Z",
    "atualizadoEm": "2021-12-13T14:54:10.109Z",
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

### 📤 Resposta:
Exemplo:
```json
[
  {
    "message": "Cliente cadastrado com sucesso:",
    "saveClient": {
    
    "name": "",
    "socialName":"",
    "identity":"",
    "telephone": "",
    "email": "@gmail.com",
    "address":"",
    "note":"Tem uma filha de 2meses | sexo da criança: feminino",
    "id": ,
    "criadoEm": "2021-12-13T14:54:10.109Z",
   "atualizadoEm": "2021-12-13T14:54:10.109Z",
   "__v": 0
    }
}
    
]
```

---

## Encontrar kit-enxoval pelo id
 
Método: `GET`

### 📥 Requisição (rota):
```
http://localhost:8080/logisticaEnxoval/todos
```

### 📤 Resposta:
Exemplo:
```json
[
  {
    "message": "Cliente cadastrado com sucesso:",
    "saveClient": {
    
    "name": "",
    "socialName":"",
    "identity":"",
    "telephone": "",
    "email": "@gmail.com",
    "address":"",
    "note":"Tem uma filha de 2meses | sexo da criança: feminino",
    "id": ,
    "criadoEm": "2021-12-13T14:54:10.109Z",
   "atualizadoEm": "2021-12-13T14:54:10.109Z",
   "__v": 0
    }
}
    
]
```

---

## 🧾Atualizar dados do Kit-enxoval"

Método: `PUT`

### 📥 Requisição (rota):
```
http://localhost:8080/logisticaEnxoval/atualizar/:id

### 📜 Parâmetros (body):
*Parâmetros (especifique o que deseja atualizar).

​```json
{
    "name": "",
    "socialName":"",
    "identity":"",
    "telephone": "",
    "email": "@gmail.com",
    "address":"",
    "note":"Tem uma filha de 2meses | sexo da criança: feminino"
}
```

### 📤 Resposta:
Exemplo:
```json
{
  {
   "nome": "France Santos Figueira",
   "contato": "9999-7777",
   "email": "france@teste.com.br",
   "profissao": "Massagista",
   "area": "Saúde",
   "informacoes": "Massagem terapeutica",
   "criadoEm": "2021-12-13T14:54:10.109Z",
   "atualizadoEm": "2021-12-13T14:54:10.109Z",
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

### 📤 Resposta:
Exemplo:
```
{
    "message": "Cliente deletado com sucesso:",
    "saveClient": {
    
    "name": "",
    "socialName":"",
    "identity":"",
    "telephone": "",
    "email": "@gmail.com",
    "address":"",
    "note":"Tem uma filha de 2meses | sexo da criança: feminino",
    "id": ,
    "criadoEm": "2021-12-13T14:54:10.109Z",
   "atualizadoEm": "2021-12-13T14:54:10.109Z",
   "__v": 0
    }
```


<div id='heroku'/>

## 🗺 Acesso via Heroku


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