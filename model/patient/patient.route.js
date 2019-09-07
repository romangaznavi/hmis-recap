const patientModel = require('./patient.model');
const express = require('express');
const router = express.Router();

router.post('/add', patientModel.add); 
router.get('/list', patientModel.findAll);
router.get('/view/:id', patientModel.findOne);
router.put('/update/:id', patientModel.update);
router.get('/count', patientModel.countAll);
router.delete('/delete/:id', patientModel.delete);

module.exports = router; 