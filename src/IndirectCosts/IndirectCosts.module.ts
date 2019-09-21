import { Module } from '@nestjs/common';
import { IndirectCostsService } from './IndirectCosts/IndirectCosts.service';
import { IndirectCostsController } from './IndirectCosts/IndirectCosts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IndirectCost } from './IndirectCost.entity';

@Module({
  imports: [TypeOrmModule.forFeature([IndirectCost])],
  providers: [IndirectCostsService],
  controllers: [IndirectCostsController],
})
export class IndirectCostsModule {}
