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

module.exports.update = (req, res) => {
    Department.findByIdAndUpdate(req.params.id, {
        $set:{
            name: req.body.name,
            description: req.body.description
        }
    }, {new: true})
    .then(result => {
        if(!result){
            return res.status(404).send({
                message: "Data with given Id not found"+req.params.id
            });
        }
        res.send(result);
    }).catch(error => {
        if(error.kind === 'ObjectId') {
            re
            return res.status(500).send({
                message: "Error updating with Id"+ req.params.id
            })
        }
    })
}

module.exports.findOne = (req, res) => {
    Department.findById(req.params.id)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(404).send(err))
}

module.exports.delete = (req, res) => {
    Department.findByIdAndDelete(req.params.id)
    .then(result => res.status(200).send({
        message: "Data deleted successfully!"
    }))
    .catch(err => res.status(404).send({
        message: "error occured", err
    }));    
}