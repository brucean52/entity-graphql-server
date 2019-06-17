module.exports = {
  convertJSON: (data) => {
    const info = data.info;
    let entityDefinitions = [];
    for (let [key, value] of Object.entries(data.definitions)) {
      let definition = {
        name: key,
        properties: []
      }
    
      for (let [dKey, dValue] of Object.entries(value)) {
        if(dKey === 'properties') {
          for (let [mKey, mValue] of Object.entries(dValue)) {
            let propertyObject = { name: mKey };
            for (let [jKey, jValue] of Object.entries(mValue)) {
              let key = jKey;
              if (jKey === '$ref') {
                key = 'ref';
              }
              let propertyParameter = { [key]: jValue};
              Object.assign(propertyObject, propertyParameter);
            }
            definition.properties.push(propertyObject);
          }
        } else {
          definition = {...definition, [dKey]: dValue};
        }
      }
      entityDefinitions.push(definition)
    }
    return { ...info, entityDefinitions};
  }
}