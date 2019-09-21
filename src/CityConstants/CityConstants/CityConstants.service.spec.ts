import { Test, TestingModule } from '@nestjs/testing';
import { CityConstantsService } from './CityConstants.service';

describe('CityConstantsService', () => {
  let service: CityConstantsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CityConstantsService],
    }).compile();

    service = module.get<CityConstantsService>(CityConstantsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
