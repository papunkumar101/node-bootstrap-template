import Route1Service from '../service/route1.service.js';


class Route1Controller{
    async apiStatus(req, res, next) {
        /* 	#swagger.tags = ['Open']
                        #swagger.description = 'Hello World ' */
                        
        return await Route1Service.apiStatus(req, res, next);
      }

}
export default new Route1Controller();
