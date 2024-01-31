import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.PORT);
  console.log(process.env.LOGGING);
  await app.listen(3000);
}
bootstrap();
