import { Module } from '@nestjs/common';
import { UnitCostsService } from './UnitCosts/UnitCosts.service';
import { UnitCostsController } from './UnitCosts/UnitCosts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnitCost } from './UnitCost.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UnitCost])],
  providers: [UnitCostsService],
  controllers: [UnitCostsController],
})
export class UnitCostsModule {}
