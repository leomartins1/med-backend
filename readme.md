# Projeto Full-Stack com React, Node.js e MySQL

Este é o repositório do teste técnico NodeJs para o MEDGrupo, com um banco de dados MongoDB usando Docker Compose.

## Pré-requisitos

Antes de começar, certifique-se de que você tenha instalado:

- [Node.js](https://nodejs.org/) (LTS recomendado)
- [Yarn](https://classic.yarnpkg.com/en/docs/install/)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Configuração

1. Clone este repositório:

```bash
git clone https://github.com/leomartins1/med-backend
```

2. Instale as dependências do back-end:

```bash
yarn
```

3. Executando o Projeto

Certifique-se de que o Docker esteja em execução. Em seguida, inicie o Docker Compose para o MongoDB:

```bash
docker-compose up -d
```

Para iniciar o servidor de desenvolvimento do back-end:

```bash
yarn start
```

O back-end estará disponível em http://localhost:4000.

## End-Points

| HTTP Verbs | Endpoints    | Action                              |
| ---------- | ------------ | ----------------------------------- |
| POST       | /pessoas     | Adiciona uma nova pessoa            |
| GET        | /pessoas     | Lista todas as pessoas              |
| GET        | /pessoas/:id | Lista detalhes de uma única pessoa  |
| PATCH      | /pessoas/:id | Altera o status de uma única pessoa |
| DELETE     | /pessoas/:id | Deleta uma única pessoa             |

#### .post/pessoas

```bash
{
  "nome": "Leonardo",
  "sexo": "Masculino",
  "nascimento": "01/01/2000", # MM/DD/YYYY
}
```
