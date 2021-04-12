const clientModel = require('../models/client.model');

module.exports.clientList = (req, res) => {

  clientModel.getList()
             .then((result) => res.status(200).send(result));
}

module.exports.clientByName = (req, res) => {

  clientModel.getListByName(req.params.name)
             .then((result) => res.status(200).send(result));
}

module.exports.totals = (req, res) => {
  
  clientModel.getTotals()
             .then((result) => res.status(200).send(result));
}

module.exports.clientById = (req, res) => {
  
  clientModel.getById(req.params._id)
             .then(
               (result) => res.status(200).send(result),
               (reject) => res.status(404).json('Client not Found')
              );
} 

module.exports.clientTotals = (req, res) => {
  
  clientModel.getClientTotals(req.params.client_id)
             .then(
               (result) => res.status(200).send(result),
               (reject) => res.status(404).json('Client not Found')
              );
}

module.exports.clientEnterprises = (req, res) => {
  
  clientModel.getClientEnterprises(req.params.client_id)
             .then(
               (result) => res.status(200).send(result),
               (reject) => res.status(404).json('Client not Found')
              );
}

module.exports.clientEnterprisesByName = (req, res) => {

  clientModel.getClientEnterprisesByName(req.params.client_id, req.params.name)
             .then(
                (result) => res.status(200).send(result),
                (reject) => res.status(404).json('Client not Found')
              );
}

