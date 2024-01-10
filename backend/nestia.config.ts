import { INestiaConfig } from '@nestia/sdk';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './src/app.module';

const NESTIA_CONFIG: INestiaConfig = {
  input: async () => {
    const app = await NestFactory.create(AppModule);
    return app;
  },
  swagger: {
    output: './swagger.json',
    security: {
      bearer: {
        type: 'apiKey',
        name: 'Authorization',
        in: 'header',
      },
    },
    servers: [
      {
        url: 'http://localhost:3001',
        description: 'Local Server',
      },
    ],
  },
  output: 'src/api',
  distribute: 'packages/api',
};
export default NESTIA_CONFIG;
