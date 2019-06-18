const { convertJSON } = require('../util/data-conversion');
const raceData = require('../sample-data/race-data.json');
const supplierData = require('../sample-data/supplier-data.json');
const personData = require('../sample-data/person-data.json');

const entities = [];
entities.push(convertJSON(raceData));
entities.push(convertJSON(supplierData));
entities.push(convertJSON(personData));

const resolvers = {
  Query: {
    getAllEntities() {
      return entities;
    },
    getEntityByTitle(root, { title }) {
      const entity = entities.filter( item => {
        return item.title === title;
      })
      return entity[0];
    },
    getAllEntityDefinitions() {
      let entityDefsArray = [];
      entities.map( entity => {
        entityDefsArray.push(...entity.entityDefinitions);
      });
      return entityDefsArray;
    }
  }
}

module.exports = resolvers;
