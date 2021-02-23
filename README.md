# login


<p align="center">
	
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/castelogui/login?color=%2304D361">

  <a href="https://github.com/castelogui/login/blob/master/LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
  </a>
	
  <a href="https://www.linkedin.com/in/castelo-guilherme/">
    <img alt="Made by castelogui" src="https://img.shields.io/badge/made%20by-castelogui-%2304D361">
  </a>

  <a href="https://github.com/castelogui/login/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/castelogui/next-level-week">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/castelogui/login">

</p>

<p align="center">
  
  <a href="https://github.com/castelogui/login/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/castelogui/login?style=social">
  </a>
  
  <a href="https://github.com/castelogui/login/watchers">
    <img alt="Watchers" src="https://img.shields.io/github/watchers/castelogui/login?style=social">
  </a>
  
  <a href="https://github.com/castelogui/login/network/members">
    <img alt="Forks" src="https://img.shields.io/github/forks/castelogui/login?style=social">
  </a>
  
  <a href="https://github.com/castelogui/login/issues">
    <img alt="Issues" src="https://img.shields.io/github/issues/castelogui/login?style=social">
  </a>
  
  <a href="https://github.com/castelogui/login/contributors">
    <img alt="Contributors" src="https://img.shields.io/github/contributors/castelogui/login?style=social">
  </a>	
</p>

## 💻 O Projeto 
Apenas uma página de login com usuário e senha que após o login retorna todos os usuários cadastrados.

<h1 align="center">
    <img alt="Example" title="Example" src="https://github.com/castelogui/login/blob/main/images/login.jpeg?raw=true" width="500px" />
</h1>


## :rocket: Tecnologias

Este projeto foi desenvolvido comm as seguintes Tecnologias:

- [Node.js][nodejs]
- [React][reactjs]



## 🤔 Como contribuir

- Faça a *fork*;
- Crie uma *branch* de sua feature: `git checkout -b minha-alteracao`;
- Faça um *commit* de suas mudanças: `git commit -m 'mudanças: minha-alteracao'`;
- De um *push* da sua branch: `git push origin minha-alteracao`.

Depois de mesclar seu *pull request*, você pode deletar a sua *branch*.


## :interrobang: Como usar


```bash
# Clonar esse repositório
$ git clone https://github.com/castelogui/login

# Navegue até o diretório
$ cd next-level-week

# Abrir no VSCode
$ code .
```

Na linha de comando **como administrador**:

### Instalar API 

```bash
# Navegue até o diretório
$ cd login/backend

# Instale as dependencias necessárias
$ yarn

# Execute o comando para rodar as Migrates
$ npx knex:migrate

# Execute o comando para rodar os Seeds
$ npx run knex:seed

# Depois é preciso dar um start no server
$ yarn start

# running on port 3333
```

### Instalar o Front-end

```bash
# Navegue até o diretório
$ cd login/web

# Instale as dependências necessarias
$ yarn

# Rode
$ yarn start

# running on port 3000
```

Na página inicial é onde realiza o login
Em ``backend/src/database/seeds/data_users.js`` contém alguns dados fakes que foi utilizado em meu banco de dados. Lá contem as informações para login (username e password).

Assim que é realizado o login aparece uma mensagem de confirmação:

<h1 align="center">
    <img alt="Example" title="Example" src="https://github.com/castelogui/login/blob/main/images/login_sucesseful.png?raw=true" width="500px" />
</h1>
Logo depois de clicar em ok, a pagina é  redirecionada para o /Dashboard onde são apresentados todos os usuários cadastrados:

<h1 align="center">
    <img alt="Example" title="Example" src="https://github.com/castelogui/login/blob/main/images/users.jpeg?raw=true" width="500px" />
</h1>

## :memo: License

Este projeto está sob a MIT License. Consulte [LICENSE](https://github.com/castelogui/next-level-week/blob/master/LICENSE) para mais detalhes.


Feito com :heart: :wave: *by* [Guilherme Castelo!](https://www.linkedin.com/in/castelo-guilherme/)

