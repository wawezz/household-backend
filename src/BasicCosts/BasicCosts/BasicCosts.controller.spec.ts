import { Test, TestingModule } from '@nestjs/testing';
import { BasicCostsController } from './BasicCosts.controller';

describe('BasicCosts Controller', () => {
  let controller: BasicCostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BasicCostsController],
    }).compile();

    controller = module.get<BasicCostsController>(BasicCostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
