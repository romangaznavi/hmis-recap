const hospitalModel = require('./hospital.model');
const express = require('express');
const router = express.Router();

router.post('/add', hospitalModel.add);



module.exports = router;