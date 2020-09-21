import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lession } from './lession.entity';
import { LessionInput } from '../graphql';

@Injectable()
export class LessionService {
  constructor(
    @InjectRepository(Lession)
    private lessionRepository: Repository<Lession>,
  ) {}

  async createLession(lessionDto: LessionInput): Promise<Lession> {
    const { name, startDate, endDate } = lessionDto;
    const lession = this.lessionRepository.create({
      name,
      startDate,
      endDate,
    });
    return await this.lessionRepository.save(lession);
  }

  async getAllLession(): Promise<Lession[]> {
    return this.lessionRepository.find();
  }
}
