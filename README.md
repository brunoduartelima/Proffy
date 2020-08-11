<h3 align="center">
    <img alt="nlw" title="#nlw" width="300px" src=".gitProffy/nlw.svg">
    <br><br>
   <strong><h1> :date: Proffy </h>Sua plataforma de estudos online.</strong>  
    <br>
</h3>

<p align="center">
  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/designed -Rocketseat-blueviolet?style=for-the-badge">
  </a>
  <a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-blueviolet?style=for-the-badge">
  <br><br>
</p>

# Índice

- [Sobre](#sobre)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)
- [Como Contribuir](#como-contribuir)

<a id="sobre"></a>

## :bookmark: Sobre

O **Proffy** é uma aplicação web e mobile com a finalidade de **auxiliar na conexão entre os alunos e professores**. 
Portanto, oferece aos professores a possibilidade de registrar aulas, podendo adicionar informações como a disciplina, 
o custo e disponibilidade de horários, assim facilitando com que os interessados entrem em contato e podendo até favoritar seus professores preferidos.

<a id="tecnologias-utilizadas"></a>

## :rocket: Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/en/)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)

## :computer: Web

<h1 align="center">
    <img alt="Landing" src=".gitProffy/web-landing.png">
    <img alt="List" src=".gitProffy/web-list.png">
</h1>

## :iphone: Mobile

<h1 align="center">
    <img alt="Landing" src=".gitProffy/mobile-home.png" width="300px">
    <img alt="List" src=".gitProffy/mobile-favoritos.png" width="300px">
</h1>

<a id="como-usar"></a>

## :heavy_check_mark: Como usar

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado na máquina
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.
  - Por fim, é **essencial** ter o **[Expo](https://expo.io/)** instalado de forma global na máquina

1. Faça um clone :

```sh
  $ git clone https://github.com/brunoduartelima/Proffy.git
```

2. Executando a Aplicação:

```sh
  # Instale as dependências
  $ yarn install

  ## Crie o banco de dados
  $ cd server
  $ yarn knex:migrate

  # Inicie a API
  $ yarn start

  # Inicie a aplicação web
  $ cd web
  $ yarn start

  # Inicie a aplicação mobile
  $ cd mobile
  $ yarn start
```

<a id="como-contribuir"></a>

## :recycle: Como contribuir

- Faça um Fork desse repositório,
- Crie uma branch com a sua feature: `git checkout -b my-feature`
- Commit suas mudanças: `git commit -m 'feat: My new feature'`
- Push a sua branch: `git push origin my-feature`

## :mortar_board: Quem ministrou?

Aulas ministradas por **[Diego Fernandes](https://github.com/diego3g)**. **Next Level Week  II: OmniStack**.

## :memo: License

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
