import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { Roles } from './roles.decorator';
import { LoggingInterceptor } from './logger.interceptor';

@Controller()
@UseInterceptors(new LoggingInterceptor())
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Roles('admin')
  getHello(): string {
    return this.appService.getHello();
  }
}
