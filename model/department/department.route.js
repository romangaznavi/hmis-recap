const departmentModel = require('./department.model');
const express = require('express');
const router = express.Router();


router.post('/add', departmentModel.add);
router.get('/list', departmentModel.findAll);
router.get('/countDept', departmentModel.countAll);
router.put('/update/:id', departmentModel.update);
router.get('/view/:id', departmentModel.findOne);
router.delete('/delete/:id', departmentModel.delete);



module.exports = router;

