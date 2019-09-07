const Doctor = require('./doctor.schema');
const Department = require('../department/department.schema');
const Hospital = require('../hospital/hospital.schema');

module.exports.add = async(req, res) => {
    try {
        let department = await getDepartmentById(req.body.departmentId);
        let hospital = await getHospitalById(req.body.hospitalId);
        const doctorData = {
            name: req.body.name,
            qualification: req.body.qualification,
            department: department.name,
            gender: req.body.gender,
            mobile: req.body.mobile,
            shift: req.body.shift,
            hospital: hospital.name
        }
        Doctor.create(doctorData)
        .then(result => res.status(200).json(result))
        .catch(error => res.status(404).json({
            message: "Data cannot be found", error
        }))
    } catch (error) { 
        res.status(500).json({error});
    }
}

async function getDepartmentById(departmentId){
    try {
        const department = await Department.findById(departmentId);
        return department;
    } catch (error) {
        return error;
    }
}

async function getHospitalById(hospitalId){
    try {
        const hospital = await Hospital.findById(hospitalId);
        return hospital;
    } catch (error) {
        return error;
    }
}

module.exports.findAll = (req, res, next) => {
    Doctor.find()
    .then(result => res.status(200).send(result))
    .catch(error => res.status(404).send({
        message: "Data not found"+ error
    }))
}

module.exports.findOne = (req, res, next) => {
    Doctor.findById(req.params.id)
    .then(result => res.status(200).send(result))
    .catch(error => res.status(404).send({
        message: "Data not found"+ error
    }))
}

module.exports.countAll = (req, res, next) => {
    Doctor.countDocuments()
    .then(result => res.status(200).json(result))
    .catch(error => res.status(404).json(error))
}

module.exports.update = (req, res, next) => {
    Doctor.findByIdAndUpdate(req.params.id, {
        $set: {
            name: req.body.name,
            qualification: req.body.qualification,
            department: req.body.name,
            gender: req.body.gender,
            mobile: req.body.mobile,
            shift: req.body.shift,
            hospital: req.body.name
        }
    }, {new: true })
    .then(result => {
        if(!result) {
            return res.status(404).send({
                message: "Data not found"
            })
        }
        return res.send(result)
    })
    .catch(error => {
        if(error.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Data not found"
            })
        }
        return res.status(500).send({
            message: "Error updating with Id"+ req.params.id
        });
    });
}

module.exports.delete = (req, res, next) => {
    Doctor.findByIdAndDelete(req.params.id)
    .then(result => res.status(200).send({
        message: "Data with given Id deleted"
    }))
    .catch(error => res.status(404).send(error))
}