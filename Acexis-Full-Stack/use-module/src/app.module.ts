import { CatsController } from './cats/cats.controller';
import { Module, NestModule, MiddlewareConsumer, RequestMethod, /*RequestMethod*/ } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { GlobalModule } from './global/global.module';
import { Logger1Middleware, Logger2Middleware, /*logger*/ } from './logger.middleware';

@Module({
  imports: [CatsModule, DogsModule, GlobalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(Logger2Middleware, Logger1Middleware, /*logger*/) //in order fist, second
      .exclude(
        {path: 'cats', method: RequestMethod.GET}
      )
      //.forRoutes({ path: 'cats', method: RequestMethod.GET }, 'dogs');
      .forRoutes(CatsController)
  }
}
