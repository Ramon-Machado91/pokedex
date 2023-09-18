# Pokédex

Este é um projeto de uma aplicação React que consome a [API do Pokemon](https://pokeapi.co/). Desafio de teste técnico proposto no curso DevQuest.
___

## Captura de tela

<img src="/public/assets/pokedex.gif">
___

## Funcionalidades

- Exibir de uma lista com 12 pokemons iniciais.

- Carregamento de mais 12 pokemons ao clicar no botão "Carregar mais 12 Pokemons...".

- Ao clicar em qualquer pokemon, temos a exibição de detalhes do pokemon trazendo seu nome, lista de movimentos e habilidades.

- Na listagem de Cards é exibido nome e o type do Pokemon

- Alternância entre temas claro e escuro.

- Um input "select" para filtragem de pokemons por seu tipo.


___

## Ferramentas utilizadas

- React.js: escolhido como biblioteca principal para o desenvolvimento da aplicação.

- Context API: foi utilizada para gerenciar o tema claro e escuro da aplicação, permitindo o compartilhamento desse estado entre os componentes.

- Mui Componentes- a fim de criar compenentes mais atraentes visualmente e facilitar a elaboração do designer responsivo para mobiles

- Axios para requisição de API

- React Router DOM: foi utilizado para a navegação entre as páginas da aplicação.

- JavaScript: foi utilizado como a linguagem de programação principal para a lógica e manipulação dos dados.
___

## Decisões adotadas

- Organização do código: foi estruturado em componentes reutilizáveis e separados por responsabilidades, buscando facilitar a manutenção e escalabilidade da aplicação.

- Utilização de Hooks: foram utilizados os Hooks, como o useState, useEffect, para gerenciar o estado da aplicação e controlar o ciclo de vida dos componentes.

- Requisições assíncronas: foram implementadas utilizando as funcionalidades axio/promise e then, permitindo a obtenção dos dados necessários para exibição na aplicação.


___

## Executando o projeto

1. Clone este repositório em seu computador.

2. Abra o terminal ou prompt de comando e navegue até o diretório raiz do projeto.

3. Execute o seguinte comando para instalar as dependências do projeto:

        npm install

4. Após a instalação das dependências, execute o seguinte comando para iniciar a aplicação:

        npm run dev
        Local:   http://localhost:(numero do local host) apetando CTRL + clique
