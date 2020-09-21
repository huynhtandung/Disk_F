import { GlobalService } from './global.service';
import { Module, Global } from '@nestjs/common';

@Global()
@Module({
    providers: [GlobalService],
    exports: [GlobalService]
})
export class GlobalModule {}
