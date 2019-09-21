import { Test, TestingModule } from '@nestjs/testing';
import { CostDistributionsService } from './CostDistributions.service';

describe('CostDistributionsService', () => {
  let service: CostDistributionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CostDistributionsService],
    }).compile();

    service = module.get<CostDistributionsService>(CostDistributionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
