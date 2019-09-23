import { Injectable } from '@nestjs/common';
import { Repository, ConnectionManager } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DirectCost } from '../DirectCost.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class DirectCostsService {
  constructor(
    @InjectRepository(DirectCost)
    private directCostRepository: Repository<DirectCost>,
  ) {}

  async findAll(query): Promise<any> {
    const [result, total] = await this.directCostRepository.findAndCount({
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

  async create(directCost: DirectCost): Promise<DirectCost> {
    return await this.directCostRepository.create(directCost);
  }

  async update(directCost: DirectCost): Promise<UpdateResult> {
    return await this.directCostRepository.update(directCost.Id, directCost);
  }

  async save(directCost: DirectCost[]): Promise<DirectCost[]> {
    return await this.directCostRepository.save(directCost);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.directCostRepository.delete(id);
  }
}
