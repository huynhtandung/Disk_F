import { Cats } from './cats.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
    private readonly cats: Cats[] = []

    addCat(cat: Cats){
        this.cats.push(cat);
    }

    getAllCats(): Cats[]{
        return this.cats;
    }
}
