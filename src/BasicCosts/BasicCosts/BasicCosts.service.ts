import { Injectable } from '@nestjs/common';
import { Repository, ConnectionManager } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { BasicCost } from '../BasicCost.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class BasicCostsService {
  constructor(
    @InjectRepository(BasicCost)
    private basicCostRepository: Repository<BasicCost>,
  ) {}

  async findAll(query): Promise<any> {
    const [result, total] = await this.basicCostRepository.findAndCount({
      order: query.order,
      take: query.take,
      skip: query.skip,
    });

    return {
      data: result,
      count: total,
    };
  }

  async create(basicCost: BasicCost): Promise<BasicCost> {
    return await this.basicCostRepository.save(basicCost);
  }

  async update(basicCost: BasicCost): Promise<UpdateResult> {
    return await this.basicCostRepository.update(basicCost.id, basicCost);
  }

  async save(basicCost: BasicCost[]): Promise<BasicCost[]> {
    return await this.basicCostRepository.save(basicCost);
  }

  async priceupdate(percent: number): Promise<any> {
    return await this.basicCostRepository
      .createQueryBuilder('priceUpdate')
      .update()
      .set({
        CostPerSquareFoot: () =>
          `CostPerSquareFoot + (CostPerSquareFoot / ${100 * percent})`,
      })
      .execute();
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.basicCostRepository.delete(id);
  }
}
