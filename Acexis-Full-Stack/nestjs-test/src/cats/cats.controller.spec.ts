import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cat } from './cats.interface';

describe('Cats Controller', () => {
  let catController: CatsController;
  let catService: CatsService;

  beforeEach(async () => {
    
    catService = new CatsService();
    catController = new CatsController(catService);
  })

  it('should be ok', () => {
    const result: Cat[] = []
    jest.spyOn(catService, 'findAll').mockImplementation(()=>result)
    expect(catController.getCat()).toBe(result)
  })
});


