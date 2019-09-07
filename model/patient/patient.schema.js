const mongoose = require('mongoose');
const schema = mongoose.Schema;
 
const patientSchema = new schema({
    name: { type: String, required: "Name Required", trim: true },
    age: {type: Number, required: "Age Required", trim: true },
    gender: { type: String, required: "Gender Required", trim: true },
    address: { type: String, required: "Address Required", trim: true },
    mobile: { type: Number, required: "Mobile Required", trim: true },
    blood_group: { type: String, required: "Blood Group Required", trim: true },
    diagnosis: { type: String, required: "Diagnosis Required", trim: true },
    dateOfExamination: { type: Date, required: "Date is required", trim: true },
    hospital: { type: String, required: "Hospital required", trim: true },
    doctor: { type: String, required: "Doctor required", trim: true }
})

module.exports = mongoose.model("Patient", patientSchema);