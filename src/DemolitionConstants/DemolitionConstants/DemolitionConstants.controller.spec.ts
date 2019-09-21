import { Test, TestingModule } from '@nestjs/testing';
import { DemolitionConstantsController } from './DemolitionConstants.controller';

describe('DemolitionConstants Controller', () => {
  let controller: DemolitionConstantsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DemolitionConstantsController],
    }).compile();

    controller = module.get<DemolitionConstantsController>(
      DemolitionConstantsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
