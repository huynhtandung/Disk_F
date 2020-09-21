import { Test, TestingModule } from '@nestjs/testing';
import { CatsService } from './cats.service';
import { Cat } from './cats.interface';
import { CreateCatDto } from './cats.dto';

describe('CatsService', () => {
  let service: CatsService;
  let cat: Cat[] = []
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CatsService],
    }).compile();

    service = module.get<CatsService>(CatsService);
  });

  it('should be add cat', () => {
    let catDto = new CreateCatDto();
    catDto.name = 'A'
    catDto.age = 1
    catDto.breed = 'male'
    cat.push(catDto)

    expect(service.create(catDto)).toBe(cat)
  });

  it('should be get all cat', () => {
    expect(service.findAll()).toBe(cat)
  })

});
