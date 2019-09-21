import { Test, TestingModule } from '@nestjs/testing';
import { UnitCostsService } from './UnitCosts.service';

describe('UnitCostsService', () => {
  let service: UnitCostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UnitCostsService],
    }).compile();

    service = module.get<UnitCostsService>(UnitCostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
