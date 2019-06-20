# Entities Services GraphQL example API

An example GraphQL server implementation using MarkLogic Entity Services

- [MarkLogic Entity Services](https://docs.marklogic.com/guide/entity-services/getting-started)
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/)

## How to use

1. `npm install`
2. `npm start`
3. `localhost:4000/graphql` - GraphQL Playground
4. Client code [entity-react-graphql](https://github.com/brucean52/entity-react-graphql)

## Example Queries

```
query {
  getAllEntities {
    title
    description
    entityDefinitions {
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
    entityDefinitions {
      name
      primaryKey
      required
      wordLexicon
      properties {
        name
        description
        datatype
        ref
      }
    }
  }
}

query { 
  getAllEntityDefinitions{
    name
    primaryKey
    properties {
			name
      datatype
    }
  }
}
```
