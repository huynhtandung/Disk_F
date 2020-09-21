import { Module } from '@nestjs/common';
import { ReResolver } from './re.resolver';

@Module({
  providers: [ReResolver]
})
export class ReModule {}
