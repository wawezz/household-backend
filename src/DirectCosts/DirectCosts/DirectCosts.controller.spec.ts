import { Test, TestingModule } from '@nestjs/testing';
import { DirectCostsController } from './DirectCosts.controller';

describe('DirectCosts Controller', () => {
  let controller: DirectCostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DirectCostsController],
    }).compile();

    controller = module.get<DirectCostsController>(DirectCostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
