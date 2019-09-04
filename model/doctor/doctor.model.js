const Doctor = require('./doctor.schema');
const Department = require('../department/department.schema');
const Hospital = require('../hospital/hospital.schema');
 

module.exports.add = async(req, res) => {
    try {
        let department = await getDepartmentById(req.body.departmentId);
        let hospital = await getHospitalById(req.body.getHospitalById);
        const doctorData = {
            name: req.body.name,
            qualification: req.body.qualification,
            department: department.name,
            gender: req.body.gender,
            mobile: req.body.mobile,
            shift: req.body.shift,
            hospital: {
                id: req.body.hospitalId,
                name: hospital.name
            }
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