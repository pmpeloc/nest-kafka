import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['host.docker.internal:9094'],
          // ssl: true,
          // sasl: {
          //   mechanism: 'plain',
          //   username: 'api_key',
          //   password: 'secret',
          // },
        },
      },
    },
  );
  app.listen();
  console.log('app is listening...');
}
bootstrap();
