import { Module } from '@nestjs/common';
import { DirectCostsService } from './DirectCosts/DirectCosts.service';
import { DirectCostsController } from './DirectCosts/DirectCosts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DirectCost } from './DirectCost.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DirectCost])],
  providers: [DirectCostsService],
  controllers: [DirectCostsController],
})
export class DirectCostsModule {}
