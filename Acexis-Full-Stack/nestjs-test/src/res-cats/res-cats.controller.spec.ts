import { Test, TestingModule } from '@nestjs/testing';
import { ResCatsController } from './res-cats.controller';

describe('ResCats Controller', () => {
  let controller: ResCatsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ResCatsController],
    }).compile();

    controller = module.get<ResCatsController>(ResCatsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
