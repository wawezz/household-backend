import { Test, TestingModule } from '@nestjs/testing';
import { CostDistributionsController } from './CostDistributions.controller';

describe('CostDistributions Controller', () => {
  let controller: CostDistributionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CostDistributionsController],
    }).compile();

    controller = module.get<CostDistributionsController>(
      CostDistributionsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
