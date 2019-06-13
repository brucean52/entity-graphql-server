# Entities Services GraphQL example API

An example GraphQL server implementation using MarkLogic Entity Services

- [MarkLogic Entity Services](https://docs.marklogic.com/guide/entity-services/getting-started)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)

## How to use

>1. `npm install`
>2. `npm start`
>3. `localhost:4000/graphql` - GraphQL Playground

## Example Queries

``
query {
  getAllEntities {
    title
    description
    definitions {
      name
      primaryKey
      required
      wordLexicon
      properties {
        name
        datatype
        ref
      }
    }
  }
}

query {
  getEntityByTitle(title: "Person"){
    title
    description
    definitions {
      name
      primaryKey
      required
      wordLexicon
      properties {
        name
        datatype
        ref
      }
    }
  }
}
``
