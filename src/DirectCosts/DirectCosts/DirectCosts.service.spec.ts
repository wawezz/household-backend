import { Test, TestingModule } from '@nestjs/testing';
import { DirectCostsService } from './DirectCosts.service';

describe('DirectCostsService', () => {
  let service: DirectCostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DirectCostsService],
    }).compile();

    service = module.get<DirectCostsService>(DirectCostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
