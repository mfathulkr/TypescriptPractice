import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Type-Safe Authentication API',
    version: '1.0.0',
    description: 'API endpoints for user authentication',
  },
  servers: [{ url: 'http://localhost:3000' }],
};

const options = {
  swaggerDefinition,
  apis: ['./src/index.ts'], 
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;