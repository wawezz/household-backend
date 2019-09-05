import { Module } from '@nestjs/common';
import { BasicCostsService } from './BasicCosts/BasicCosts.service';
import { BasicCostsController } from './BasicCosts/BasicCosts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BasicCost } from './BasicCost.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BasicCost])],
  providers: [BasicCostsService],
  controllers: [BasicCostsController],
})
export class BasicCostsModule {}
