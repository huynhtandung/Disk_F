import { Module } from '@nestjs/common';
import { LessionResolver } from './lession.resolver';
import { LessionService } from './lession.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lession } from './lession.entity';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([Lession]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  providers: [LessionResolver, LessionService]
})
export class LessionModule {}