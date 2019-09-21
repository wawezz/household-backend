import { Test, TestingModule } from '@nestjs/testing';
import { CityConstantsController } from './CityConstants.controller';

describe('CityConstants Controller', () => {
  let controller: CityConstantsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CityConstantsController],
    }).compile();

    controller = module.get<CityConstantsController>(CityConstantsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
