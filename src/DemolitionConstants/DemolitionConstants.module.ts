import { Module } from '@nestjs/common';
import { DemolitionConstantsService } from './DemolitionConstants/DemolitionConstants.service';
import { DemolitionConstantsController } from './DemolitionConstants/DemolitionConstants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DemolitionConstant } from './DemolitionConstant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DemolitionConstant])],
  providers: [DemolitionConstantsService],
  controllers: [DemolitionConstantsController],
})
export class DemolitionConstantsModule {}
