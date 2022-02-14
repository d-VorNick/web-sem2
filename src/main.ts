import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT;
  if (port != undefined) {
    await app.listen(port);
  } else {
    await app.listen(8080);
  }
}
bootstrap();