import { Test, TestingModule } from '@nestjs/testing';
import { DemolitionConstantsService } from './DemolitionConstants.service';

describe('DemolitionConstantsService', () => {
  let service: DemolitionConstantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DemolitionConstantsService],
    }).compile();

    service = module.get<DemolitionConstantsService>(
      DemolitionConstantsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
