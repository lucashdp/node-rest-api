const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        version: '', // by default: '1.0.0'
        title: 'Tutorials API', // by default: 'REST API'
        description: '', // by default: ''
    },
    //host: 'localhost:3001', // by default: 'localhost:3000'
    host: 'localhost:8001', // by default: 'localhost:3000'
    basePath: '', // by default: '/'
    schemes: ['http', 'https'], // by default: ['http']
    consumes: [], // by default: ['application/json']
    produces: [], // by default: ['application/json']
    tags: [
        // by default: empty Array
        {
            name: 'Tutorial', // Tag name
            description: 'Tutorial routes', // Tag description
        }
    ],
    securityDefinitions: {
        bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
        },
    }, // by default: empty object (Swagger 2.0)
    definitions: {
        Tutorial: {
            _id: "asdasdasdasDASDAS",
            title: "Título do Tutorial",
            description: "Descrição do tutorial"
        }
    }, // by default: empty object
    components: {}, // by default: empty object (OpenAPI 3.x)
};

const outputLocalFile = './swagger_output.json';
const endpointsFiles = [
    `./src/v1/routes/index.js`,
];

swaggerAutogen(outputLocalFile, endpointsFiles, doc);
