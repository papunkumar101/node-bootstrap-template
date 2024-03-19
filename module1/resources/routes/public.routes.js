import Route1 from '../../core/route1/route1.routes.js';


class Routes {
    constructor(app) {
      this.configureCors(app);
      // new OpenRoutes('/v1/', app);
      app.use('/v1/', Route1);
   }
  
    configureCors(app) {
      app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET');
        res.setHeader('Cache-Control', 'no-cache');
        next();
      });
    }
  }
  export default Routes;
  