const { gql } = require('apollo-server');

const typeDefs = gql`
  type Entity {
    title: String
    version: String
    baseUri: String
    description: String
    definitions: [Definitions]
  }
  type Definitions {
    name: String
    primaryKey: String
    required: [String]
    wordLexicon: [String]
    properties: [Properties]
  }

  type Properties {
    name: String
    datatype: String
    ref: String
  }

  type Query {
    getAllEntities: [Entity],
    getEntityByTitle( title: String): Entity
  }
`;
module.exports = typeDefs;

/* Test Queries - these return all the entity data
Queries can also be combined into a single query object

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

*/