import { Injectable } from '@nestjs/common';
import { Repository, ConnectionManager } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CostDistribution } from '../CostDistribution.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class CostDistributionsService {
  constructor(
    @InjectRepository(CostDistribution)
    private costDistributionRepository: Repository<CostDistribution>,
  ) {}

  async findAll(query): Promise<any> {
    const [result, total] = await this.costDistributionRepository.findAndCount({
      order: query.order,
      take: query.take,
      skip: query.skip,
      where: query.where,
    });

    return {
      data: result,
      count: total,
    };
  }

  async create(costDistribution: CostDistribution): Promise<CostDistribution> {
    return await this.costDistributionRepository.save(costDistribution);
  }

  async update(costDistribution: CostDistribution): Promise<UpdateResult> {
    return await this.costDistributionRepository.update(
      costDistribution.Id,
      costDistribution,
    );
  }

  async save(
    costDistribution: CostDistribution[],
  ): Promise<CostDistribution[]> {
    return await this.costDistributionRepository.save(costDistribution);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.costDistributionRepository.delete(id);
  }
}
