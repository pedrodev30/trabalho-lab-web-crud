<h1 align="center">CRUD de Usuários - Projeto Web Full Stack</h1>

<p align="center">
  <img src="./.github/presentation.gif" width="100%">
</p>

## 📒 Descrição

Este é o meu trabalho da disciplina de Laboratório Web onde resolvi desenvolver um CRUD Full Stack. É possivel que os usuários cadastrem suas informações básicas, como nome, email e telefone, através de um formulário. Esses dados são armazenados em um banco de dados MySQL e exibidos em uma tabela na página principal. Os usuários também podem atualizar ou excluir seus dados conforme necessário.

## 📚 Funcionalidades

- [x] Cadastro de novos usuários através de um formulário.
- [x] Visualização dos usuários cadastrados em uma tabela.
- [x] Atualização dos dados de um usuário existente.
- [x] Exclusão de usuários da tabela.

## 🔧 Tecnologias utilizadas

- Front-end:
  - ReactJS
  - React Icons
  - React Toastify
  - Styled-Components

- Back-end:
  - Node.js
  - Express
  - Nodemon
  - Cors

- Banco de Dados:
  - MySQL

## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

- Você tem uma máquina ```<Windows / Linux / Mac>```
- Node.js instalado. Você pode instalar o Node através [DESSE LINK](https://nodejs.org/en)
- Banco de dados MySQL configurado e em execução. Se tiver alguma duvida de como instalar e configurar o MySQL recomendo [ESTE LINK](https://www.youtube.com/watch?v=DKMrVxtJyUk)

## 🚀 Como Executar o Projeto

```bash
# clone o repositório
$ git clone https://github.com/pedrodev30/trabalho-lab-web-crud.git
```

### Configuração do Banco de Dados

- Crie um banco de dados MySQL com o nome: ```<Escolha o nome que preferir>```
- Execute o script SQL abaixo para criar a tabela "usuarios" no banco de dados:

```sql
CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefone VARCHAR(45),
  PRIMARY KEY(id)
);
```

- Execute este comando:

```sql
ALTER USER 'Aqui coloque entre as aspás simples o nome do usuario do banco(geralmente é root)'@'localhost' IDENTIFIENED WITH mysql_native_passsword BY 'Aqui coloque entre as aspás simples a senha do seu banco'; 
```

### Configuração do Back-end

```bash
# Entre na pasta backend
$ cd backend

# Instale as dependências
$ npm install

# Execute o servidor
$ npm start
```

- O servidor back-end estará sendo executado em http://localhost:8800.
- Obs: entre no arquivo "db.js" e altere a senha(use a senha do seu banco de dados assim que instalou o MySQL), o nome do banco quando você criou e se o seu usuário não for o root coloque o nome do usuário do banco.

## Configuração do Front-end

```bash
# Entre na pasta frontend
$ cd frontend

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm start
```

- O aplicação front-end estará sendo executado em http://localhost:3000.

## 🤝 Criador

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://github.com/pedrodev30.png" width="100px;" alt="Foto do Pedro Henrique"/><br>
        <sub>
          <b>Pedro Henrique</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## 🎯 Status do projeto

O projeto está finalizado.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](https://github.com/pedrodev30/trabalho-lab-web-crud/blob/main/LICENSE) para mais detalhes.