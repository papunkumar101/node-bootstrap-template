import Router from 'express';
const router = Router();
import Module1Controller from '../controller/route1.controller.js';
import MysqlController from '../controller/mysql.controller.js'


router.get('/api-status', Module1Controller.apiStatus);

// mysql 
router.post('/mysql-create', MysqlController.create);


export default router;
