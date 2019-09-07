const Patient = require('./patient.schema');
const Hospital = require('../hospital/hospital.schema');
const Doctor = require('../doctor/doctor.schema');

module.exports.add = async (req, res) =>{
    try {
        let hospital = await getHospitalById(req.body.hospitalId);
        let doctor = await getDoctorById(req.body.doctorId);
        const patientData = {
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender,
            address: req.body.address,
            mobile: req.body.mobile,
            blood_group: req.body.blood_group,
            diagnosis: req.body.diagnosis,
            dateOfExamination: req.body.dateOfExamination,
            hospital: hospital.name,
            doctor: doctor.name
        }
        Patient.create(patientData)
        .then(result => res.status(200).send({result}))
        .catch(error => res.status(404).send({error}))
    } catch (error) {
        return error;
    }
}
 
async function getHospitalById(hospitalId) {
    try {
        const hospital = await Hospital.findById(hospitalId);
        return hospital;
    } catch (error) {
        return error;
    }
}

async function getDoctorById(doctorId) {
    try {
        const doctor = await Doctor.findById(doctorId);
        return doctor;
    } catch (error) {
        return error;
    }
}

module.exports.findAll = (req, res) => {
    Patient.find()
    .then(result => res.status(200).send(result))
    .catch(error => res.status(404).send(error))
}

module.exports.findOne = (req, res) =>{
    Patient.findById(req.params.id)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(404).send({
        message: "Could not find data with given id"+ err
    }))
}

module.exports.update = (req, res, next) => {
    Patient.findByIdAndUpdate(req.params.id, {
        $set: {
            name: req.body.name,
            age: req.body.age,
            gender: req.body.gender, 
            address: req.body.address,
            mobile: req.body.mobile,
            blood_group: req.body.blood_group,
            diagnosis: req.body.diagnosis,
            dateOfExamination: req.body.dateOfExamination,
            hospital: req.body.name,
            doctor: req.body.name
        }
    }, {new: true})
    .then(result => res.status(200).send(result))
    .catch(error => res.status(404).send(error))
}

module.exports.countAll = (req, res) => {
    Patient.countDocuments()
    .then(result => res.status(200).json(result))
    .catch(error => res.status(404).json(error))
}

module.exports.delete = (req, res) => {
    Patient.findByIdAndDelete(req.params.id) 
    .then(result => res.status(200).json({
        message: "Record deleted successfully!"
    }))
    .catch(error => res.status(404).json(error))
}