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

}
export default new MysqlController();
