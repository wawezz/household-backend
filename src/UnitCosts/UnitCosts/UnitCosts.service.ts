import { Injectable } from '@nestjs/common';
import { Repository, ConnectionManager } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UnitCost } from '../UnitCost.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class UnitCostsService {
  constructor(
    @InjectRepository(UnitCost)
    private unitCostRepository: Repository<UnitCost>,
  ) {}

  async findAll(query): Promise<any> {
    const [result, total] = await this.unitCostRepository.findAndCount({
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

  async create(unitCost: UnitCost): Promise<UnitCost> {
    return await this.unitCostRepository.save(unitCost);
  }

  async update(unitCost: UnitCost): Promise<UpdateResult> {
    return await this.unitCostRepository.update(unitCost.Id, unitCost);
  }

  async save(unitCost: UnitCost[]): Promise<UnitCost[]> {
    return await this.unitCostRepository.save(unitCost);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.unitCostRepository.delete(id);
  }
}
