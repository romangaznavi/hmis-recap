const doctorModel = require('./doctor.model');
const express = require('express');
const router = express.Router();

router.post('/add', doctorModel.add); 
router.get('/list', doctorModel.findAll);
router.get('/view/:id', doctorModel.findOne);
router.get('/count', doctorModel.countAll);
router.put('/update/:id', doctorModel.update);
router.delete('/delete/:id', doctorModel.delete);
 
module.exports = router;