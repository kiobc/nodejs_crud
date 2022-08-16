const express= require('express');
const Tcontrollers = require('../controllers/Tcontrollers');
const router= express.Router();

router.get('/tasks',Tcontrollers.index);
router.get('/create',Tcontrollers.create);
router.post('/create',Tcontrollers.store);
router.post('/tasks/delete',Tcontrollers.destroy);
router.get('/tasks/edit/:id',Tcontrollers.edit);
router.post('/tasks/edit/:id',Tcontrollers.update);

module.exports=router;