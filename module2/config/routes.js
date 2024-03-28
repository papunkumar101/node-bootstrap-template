import Router from 'express';
const router = Router();
import Module1Controller from '../controller/route1.controller.js';
import MysqlController from '../controller/mysql.controller.js'
import MongoController from '../controller/mongo.controller.js'


router.get('/api-status', Module1Controller.apiStatus);

// mysql 
router.post('/mysql-create', MysqlController.create);
router.get('/mysql-read', MysqlController.read);
router.put('/mysql-update', MysqlController.update);
router.delete('/mysql-delete', MysqlController.delete);



// mongo 
router.post('/mongo-create', MongoController.create);
router.get('/mongo-read', MongoController.read);
router.put('/mongo-update', MongoController.update);
router.delete('/mongo-delete', MongoController.delete);

export default router;
