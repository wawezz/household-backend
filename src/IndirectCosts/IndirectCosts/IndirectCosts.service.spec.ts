import { Test, TestingModule } from '@nestjs/testing';
import { IndirectCostsService } from './IndirectCosts.service';

describe('IndirectCostsService', () => {
  let service: IndirectCostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IndirectCostsService],
    }).compile();

    service = module.get<IndirectCostsService>(IndirectCostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
