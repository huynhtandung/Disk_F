import { Module } from '@nestjs/common';
import { TextingService } from './texting.service';
import { TextingResolver } from './texting.resolver';

@Module({
  providers: [TextingService, TextingResolver]
})
export class TextingModule {}
