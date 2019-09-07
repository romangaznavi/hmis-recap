const hospitalModel = require('./hospital.model');
const express = require('express');
const router = express.Router();

router.post('/add', hospitalModel.add);
router.get('/list', hospitalModel.findAll);
router.get('/view/:id', hospitalModel.findOne);
router.get('/count', hospitalModel.countAll);
router.put('/update/:id', hospitalModel.update);
router.delete('/delete/:id', hospitalModel.delete);

module.exports = router;