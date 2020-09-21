import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './logger.middleware';
import { /*HttpExceptionFilter */} from './http-exception.filter';
import { AllExceptionsFilter } from './all-exceptio.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //every route has go through logger + run first
  app.use(logger)
  //app.useGlobalFilters(new HttpExceptionFilter());//global exception

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  await app.listen(3000);
}
bootstrap();
