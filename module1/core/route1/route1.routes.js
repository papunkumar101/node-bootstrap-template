import Router from 'express';
const router = Router();
import Module1Controller from './route1.controller.js';


router.get('/hey-hello', Module1Controller.heyHello);


export default router;
