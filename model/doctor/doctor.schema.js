const mongoose = require('mongoose');
const schema = mongoose.Schema;

const doctorSchema = new schema({
    name: { type: String, required: true },
    qualification: { type: String, required: true },
    department: { type: String, required: true },
    gender: { type: String, required: true },
    mobile: { type: Number, required: true },
    Shift: { type: String },
    hospital: { type: String, required: true }
})

module.exports = mongoose.model("Doctor", doctorSchema);