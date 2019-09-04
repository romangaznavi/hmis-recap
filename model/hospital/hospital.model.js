const Hospital = require('./hospital.schema');

module.exports.add = (req, res, next) => {
    let hospitalData = {
        name: req.body.name,
        address: {
            country: req.body.country,
            province: req.body.province,
            city: req.body.city
        }
    }
    Hospital.create(hospitalData)
    .then(result => res.status(200).json({result}))
    .catch(error => res.status(404).json(error))
    console.log(req.body);
}