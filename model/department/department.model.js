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
