import { Test, TestingModule } from '@nestjs/testing';
import { UnitCostsController } from './UnitCosts.controller';

describe('UnitCosts Controller', () => {
  let controller: UnitCostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UnitCostsController],
    }).compile();

    controller = module.get<UnitCostsController>(UnitCostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
