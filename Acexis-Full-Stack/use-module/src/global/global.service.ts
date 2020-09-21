import { Injectable } from '@nestjs/common';

@Injectable()
export class GlobalService {
    private readonly data: number[] = [];

    setData(){
        this.data.push(1);
    }

    getData(): number[]{
        return this.data;
    }

}
