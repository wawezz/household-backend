import { Module } from '@nestjs/common';
import { CostDistributionsService } from './CostDistributions/CostDistributions.service';
import { CostDistributionsController } from './CostDistributions/CostDistributions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CostDistribution } from './costDistribution.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CostDistribution])],
  providers: [CostDistributionsService],
  controllers: [CostDistributionsController],
})
export class CostDistributionsModule {}
