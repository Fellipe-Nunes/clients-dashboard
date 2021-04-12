const DB = require('../../clients.mock');

module.exports.getList = () => {

  return new Promise((resolve, reject) => {
    
    const enterprises = DB.map(client => {
                            return client.enterprises
                                         .map( enterprise => ({...enterprise, clientName: client.name}))
                          })
                          .flat();

    resolve(enterprises);
  });
}

module.exports.getListByName = (name) => {

  return new Promise((resolve, reject) => {
    
    const enterprises = DB.map(client => {
                            return client.enterprises
                                         .filter(enterprise => enterprise.name.match(new RegExp(name, 'i'))) 
                                         .map( enterprise => ({...enterprise, clientName: client.name}))
                          })
                          .flat();

    resolve(enterprises);
  });
}