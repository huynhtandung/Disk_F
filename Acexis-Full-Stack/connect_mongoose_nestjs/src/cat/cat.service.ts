import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './cat.interface';
import { CatDto } from './cat.dto';
import { Model } from 'mongoose';

@Injectable()
export class CatService {
    constructor(@InjectModel('Cat') private catModel: Model<Cat>) {}

  async create(createCatDto: CatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return this.catModel.find().exec();
  }

  async findOne(id: string): Promise<Cat[]> {
    return this.catModel.findOne(id).exec();
  }
}
