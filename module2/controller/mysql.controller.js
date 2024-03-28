import MysqlModel from '../model/mysql.model.js';


class MysqlController{
    async create(req, res, next) {
        /* 	#swagger.tags = ['CRUD']
                        #swagger.description = 'create' */  
        try {
            const { input_name } =  req.body;
            let result = await MysqlModel.create(input_name);
            return res.json({ code: 200, data: result, message: 'success', error: null });
        } catch (error) {
            return res.json({ code: 400, data: null, message: 'failed', error: error });
        } 
      }


    async read(req, res, next) {
        /* 	#swagger.tags = ['CRUD']
                        #swagger.description = 'read' */  
        try { 
            let result = await MysqlModel.read();
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
            let result = await MysqlModel.update(update_id, new_name);
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
            let result = await MysqlModel.delete(delete_id);
            return res.json({ code: 200, data: result, message: 'success', error: null });
        } catch (error) {
             return res.json({ code: 400, data: null, message: 'failed', error: error });
        } 
      }

}
export default new MysqlController();
