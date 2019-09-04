const mongoose = require('mongoose');
const schema = mongoose.Schema;

const hospitalSchema = new schema({
    name: { 
        type: String, 
        required: "Name required",
        trim: true 
    },
    address: {
        country: { 
            type: String, 
            required: "Country Required",
            trim: true 
        },
        province: {
            type: String,
            required: "Province Required",
            trim: true
        },
        city: { 
            type: String, 
            required: "City Required",
            trim: true }
    }
});

module.exports = mongoose.model("Hospital", hospitalSchema);