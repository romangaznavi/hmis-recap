const Hospital = require('./hospital.schema');

module.exports.add = (req, res, next) => {
    let hospitalData = {
        name: req.body.name,
        address: {
            country: req.body.address.country,
            province: req.body.address.province,
            city: req.body.address.city
        }
    }
    Hospital.create(hospitalData)
    .then(result => res.status(200).json({result}))
    .catch(error => res.status(404).json(error))
} 

module.exports.findAll = (req, res) => {
    Hospital.find()
    .then(result => res.status(200).send(result))
    .catch(err => res.status(404).send(err))
}

module.exports.findOne = (req, res) => {
    Hospital.findById(req.params.id)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(404).send(err))
}

module.exports.countAll = (req, res) => {
    Hospital.countDocuments()
    .then(result => res.status(200).json(result))
    .catch(error => res.status(404).json(error))
} 

module.exports.update = (req, res) => {
    Hospital.findByIdAndUpdate(req.params.id, {
        $set: {
            name: req.body.name,
            address: {
                country: req.body.address.country,
                province: req.body.address.province,
                city: req.body.address.city
            }
        }
    }, {new: true})
    .then(result => {
        if(!result) {
            return res.status(404).send({
                message: "Data not found"
            });
        }
        return res.send(result)
    }).catch(error => {
        if(error.kind === 'ObjectId'){
            return res.status(404).send({
                message: "Data with given id not found"+ req.params.id
            });
        }
        return res.status(500).send({
            message: "Error updating data"+ req.params.id
        });
    });
}

module.exports.delete = (req, res) => {
    Hospital.findByIdAndDelete(req.params.id)
    .then(result => res.status(200).send({
        message: "Data Deleted Successfully!"
    }))
    .catch(error => res.status(400).send(error))
}