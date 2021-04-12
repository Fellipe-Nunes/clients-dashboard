const clientsDB = require('../../clients.mock');

module.exports.getList = () => {

  return new Promise((resolve, reject) => {
    
    const clients = clientsDB.map(
                      client => {
                        return {
                          _id: client._id, 
                          name: client.name,
                          image_src: client.image_src, 
                          enterprisesAmount: client.enterprises.length,
                          realtiesAmount: client.enterprises.reduce(
                            (total, enterprise) => total + (+enterprise.realties),
                            0
                          )
                        };
                      }
                    );

    resolve(clients);
  });
}

module.exports.getListByName = (name) => {

  return new Promise((resolve, reject) => {
    
    const clients = clientsDB.filter( 
                      client => client.name.match(new RegExp(name, 'i'))
                    )
                    .map(
                      client => {
                        return {
                          _id: client._id, 
                          name: client.name,
                          image_src: client.image_src, 
                          enterprisesAmount: client.enterprises.length,
                          realtiesAmount: client.enterprises.reduce(
                            (total, enterprise) => total + (+enterprise.realties),
                            0
                          )
                        };
                      }
                    );

    resolve(clients);

  });

}

module.exports.getTotals = () => {
  
  return new Promise((resolve, reject) => {

    const totals =  {
                      clientsAmount: clientsDB.length,
                      enterprisesAmount: clientsDB.reduce(
                        (total, client) => total + client.enterprises.length,
                        0
                      ),
                      realtiesAmount: clientsDB.reduce(
                        (total, client) => total + client.enterprises.reduce(
                          (total, enterprise) => total + (+enterprise.realties),
                          0
                        ),
                        0
                      )
                    };
    
    resolve(totals);
  });


  return  
}

module.exports.getById = (id) => {
  
  return new Promise((resolve, reject) => {
      const client = clientsDB.find(client => client._id == id);

    if(client){
      resolve({_id: client._id, name: client.name, image_src: client.image_src});
    }
    else{
      reject();
    }
  });  
} 

module.exports.getClientTotals = (id) => {
  
  return new Promise((resolve, reject) => {
    const client = clientsDB.find(client => client._id == id);

    if(client){

      const totals = {
        enterprisesAmount: client.enterprises.length,
        realtiesAmount: client.enterprises
                              .reduce(
                                (total, enterprise) => total + (+enterprise.realties),
                                0
        )
      };

      resolve(totals);       
    }
    else{
      reject();
    }

  });  
}

module.exports.getClientEnterprises = (id) => {
  
  return new Promise((resolve, reject) => {

    const client = clientsDB.find(client => client._id == id);

    if(client){

      const enterprises = client.enterprises
                                .map((enterprise) => enterprise);
      resolve(enterprises);       
    }
    else{
      reject();
    }

  });  
}

module.exports.getClientEnterprisesByName = (id, name) => {

  return new Promise((resolve, reject) => {
    
    const client = clientsDB.find(client => client._id == id);

    if(client){

      const enterprises = client.enterprises
                                .filter( enterprise => enterprise.name.match(new RegExp(name, 'i')));
      resolve(enterprises);       
    }
    else{
      reject();
    }

    resolve(clients);

  });

}
