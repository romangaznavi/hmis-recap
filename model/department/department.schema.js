const mongoose = require("mongoose");
const schema = mongoose.Schema;

const departmentSchema = new schema ({
    name: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String 
    }
});

module.exports = mongoose.model("department", departmentSchema);