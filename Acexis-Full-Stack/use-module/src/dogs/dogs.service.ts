import { Dogs } from './dogs.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DogsService {
    private readonly dogs: Dogs[] = []

    addDog(dogs: Dogs){
        this.dogs.push(dogs);
    }

    getAllDogs(): Dogs[]{
        return this.dogs;
    }
}
