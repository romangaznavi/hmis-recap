const mongoose = require('mongoose');

const schema = mongoose.Schema;

const patientSchema = new schema({
    name: { type: String, required: "Name Required", trim: true },
    age: {type: Number, required: "Age Required", trim: true },
    gender: { type: String, required: "Gender Required", trim: true },
    address: { type: String, required: "Address Required", time: true },
    mobile: { type: Number, required: "Mobile Required", trim: true },
    blood_group: { type: String, required: "Blood Group Required", trim: true },
    diagnosis: { type: String, required: "Diagnosis Required", trim: true },
    medicalRecord: {
        
    },
    hospitalData: {
        id: { type: mongoose.Schema.Types.ObjectId, ref: 'Hospital'},
        name: { type: String, required: "Hospital Name Required", trim: true }
    },

})