import MongoModel from '../model/mongo.model.js';


class MongoController{
    async create(req, res, next) {
        /* 	#swagger.tags = ['CRUD']
                        #swagger.description = 'create' */  
        try {
            const { input_name } =  req.body;
            let result = await MongoModel.create(input_name);
            return res.json({ code: 200, data: result, message: 'success', error: null });
        } catch (error) {
            return res.json({ code: 400, data: null, message: 'failed', error: error });
        } 
      }


    async read(req, res, next) {
        /* 	#swagger.tags = ['CRUD']
                        #swagger.description = 'read' */  
        try { 
            let result = await MongoModel.read();
            return res.json({ code: 200, data: result, message: 'success', error: null });
        } catch (error) {
            return res.json({ code: 400, data: null, message: 'failed', error: error });
        } 
      }

    async update(req, res, next) {
         /* 	#swagger.tags = ['CRUD']
                        #swagger.description = 'update' */  
        try { 
            const { update_id, new_name } =  req.body;
            let result = await MongoModel.update(update_id, new_name);
            return res.json({ code: 200, data: result, message: 'success', error: null });
        } catch (error) {
             return res.json({ code: 400, data: null, message: 'failed', error: error });
        } 
      }


    async delete(req, res, next) {
         /* 	#swagger.tags = ['CRUD']
                        #swagger.description = 'delete' */  
        try { 
            const { delete_id } =  req.body;
            let result = await MongoModel.delete(delete_id);
            return res.json({ code: 200, data: result, message: 'success', error: null });
        } catch (error) {
             return res.json({ code: 400, data: null, message: 'failed', error: error });
        } 
      }

}
export default new MongoController();
