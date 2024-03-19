import swaggerAutogen from 'swagger-autogen';
const swagger = swaggerAutogen();
import config from 'config';

const doc = {
  info: {
    version: '1.0', // by default: "1.0.0"
    title: 'Module1 Project Management APIs', // by default: "REST API"
    description: 'Documentation', // by default: ""
  },
  host: config.get('swagger_host_url'), // by default: "localhost:3000"
  basePath: '/', // by default: "/"
  schemes: ['http', 'https'], // by default: ['http']
  consumes: ['application/json', 'application/x-www-form-urlencoded'],
  produces: ['application/json'],
  tags: [
    // by default: empty Array
    {
      name: 'Open', // Tag name
      description: 'Endpoints', // Tag description
    },
   
    {
      name: 'User',
      description: 'User Endpoint',
      summary: 'Secured',
    },
   ],
  securityDefinitions: {
    AccessToken: {
      type: 'apiKey',
      in: 'header',
      name: 'x-access-token',
      description:
        'Please provide the valid access token, if you dont have please login and get the token as response!',
    },
    Bearer: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
      description:
        'Enter your bearer token in the format **Bearer &lt;token>**',
    },
  }, // by default: empty object
  definitions: {
    UserLogin: {
      email: 'papunmahakul1999@gmail.com',
      password: '9e7c5071f8dae2cfb8dc0a0c055cd8ce',
      username: 'Papun',
    },
   
  },
};

const outputFile = './resources/views/swagger-api-view.json';
const endpointsFiles = ['./resources/routes/public.routes.js'];

/* NOTE: if you use the express Router, you must pass in the
   'endpointsFiles' only the root file where the route starts,
   such as: index.js, app.js, routes.js, ... */

await swagger(outputFile, endpointsFiles, doc);
