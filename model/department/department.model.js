const Department = require('./department.schema');

module.exports.add = (req, res) => {
    let departmentData = {
        name: req.body.name,
        description: req.body.description
    }
    Department.create(departmentData)
    .then(result => res.status(200).send(result))
    .catch(error => res.status(400).send(error))
}

module.exports.findAll = (req, res) => {
    Department.find()
    .then(result => res.status(200).send(result))
    .catch(error => res.status(404).res.send(error))
}

module.exports.countAll = (req, res) => {
    Department.countDocuments()
    .then(result => res.status(200).json(result))
    .catch(error => res.status(404).send(error))
}