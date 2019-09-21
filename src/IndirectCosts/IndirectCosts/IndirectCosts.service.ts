import { Injectable } from '@nestjs/common';
import { Repository, ConnectionManager } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { IndirectCost } from '../IndirectCost.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class IndirectCostsService {
  constructor(
    @InjectRepository(IndirectCost)
    private indirectCostRepository: Repository<IndirectCost>,
  ) {}

  async findAll(query): Promise<any> {
    const [result, total] = await this.indirectCostRepository.findAndCount({
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

  async create(indirectCost: IndirectCost): Promise<IndirectCost> {
    return await this.indirectCostRepository.save(indirectCost);
  }

  async update(indirectCost: IndirectCost): Promise<UpdateResult> {
    return await this.indirectCostRepository.update(
      indirectCost.Id,
      indirectCost,
    );
  }

  async save(indirectCost: IndirectCost[]): Promise<IndirectCost[]> {
    return await this.indirectCostRepository.save(indirectCost);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.indirectCostRepository.delete(id);
  }
}
