import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { HostController } from './host/host.controller';
import { AsyncController } from './async/async.controller';
import { ResCatsController } from './res-cats/res-cats.controller';
import { CatsService } from './cats/cats.service';
import { HttpService } from './cats/http.service';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [CatsModule],
  controllers: [AppController, HostController, AsyncController, ResCatsController],
  providers: [AppService],
})
export class AppModule {}
