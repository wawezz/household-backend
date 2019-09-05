import { Test, TestingModule } from '@nestjs/testing';
import { BasicCostsService } from './BasicCosts.service';

describe('BasicCostsService', () => {
  let service: BasicCostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BasicCostsService],
    }).compile();

    service = module.get<BasicCostsService>(BasicCostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
