import { Controller, Get, HostParam } from '@nestjs/common';

@Controller({host: 'dunghuynh.010598@gmail.com'})
export class HostController {
    @Get()
    getHost(@HostParam('account') account): string{
        return account;
    }
}
