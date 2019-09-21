import { Test, TestingModule } from '@nestjs/testing';
import { IndirectCostsController } from './IndirectCosts.controller';

describe('IndirectCosts Controller', () => {
  let controller: IndirectCostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IndirectCostsController],
    }).compile();

    controller = module.get<IndirectCostsController>(IndirectCostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
