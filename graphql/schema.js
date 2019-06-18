const { gql } = require('apollo-server');

const typeDefs = gql`
  type EntityModel {
    title: String
    version: String
    baseUri: String
    description: String
    entityDefinitions: [EntityDefinition]
  }
  type EntityDefinition {
    name: String
    primaryKey: String
    required: [String]
    wordLexicon: [String]
    properties: [Property]
  }

  type Property {
    name: String
    datatype: String
    ref: String
  }

  type Query {
    getAllEntities: [EntityModel],
    getEntityByTitle( title: String): EntityModel,
    getAllEntityDefinitions: [EntityDefinition]
  }
`;
module.exports = typeDefs;

/* Test Queries - these return all the entity data
Queries can also be combined into a single query object

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

*/