import Router from 'express';
const router = Router();
import Module1Controller from '../controller/route1.controller.js';


router.get('/api-status', Module1Controller.apiStatus);


export default router;
