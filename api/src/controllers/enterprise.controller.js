const enterpriseModel = require('../models/enterprise.model');

module.exports.enterpriseList = (req, res) => {

  enterpriseModel.getList()
             .then((result) => res.status(200).send(result));
}

module.exports.enterpriseByName = (req, res) => {

  enterpriseModel.getListByName(req.params.name)
             .then((result) => res.status(200).send(result));
}