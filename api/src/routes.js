const clientController = require('./controllers/client.controller');
const enterpriseController = require('./controllers/enterprise.controller');

module.exports.load = (app) => {
  /** Get all clients */
  app.get("/", clientController.clientList);  

  /** Get clients by name */
  app.get("/name/:name", clientController.clientByName);
  
  /** Get client totals */
  app.get("/:client_id/totals", clientController.clientTotals);  

  /** Get all enterprises */
  app.get("/enterprise", enterpriseController.enterpriseList);

  /** Get enterprises by name */
  app.get("/enterprise/name/:name", enterpriseController.enterpriseByName);

  /** Get all enterprises by client */
  app.get("/:client_id/enterprise", clientController.clientEnterprises);

  /** Get enterprises by client and name */
  app.get("/:client_id/enterprise/name/:name", clientController.clientEnterprisesByName);

  /** Get general totals */
  app.get("/totals", clientController.totals);

  /** Get a client by _id */
  app.get("/:_id", clientController.clientById);
};
