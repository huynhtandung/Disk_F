import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [TestController]
})
export class TestModule {}
