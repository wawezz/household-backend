import { Injectable } from '@nestjs/common';
import { Repository, ConnectionManager } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { DemolitionConstant } from '../DemolitionConstant.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class DemolitionConstantsService {
  constructor(
    @InjectRepository(DemolitionConstant)
    private demolitionConstantRepository: Repository<DemolitionConstant>,
  ) {}

  async findAll(query): Promise<any> {
    const [
      result,
      total,
    ] = await this.demolitionConstantRepository.findAndCount({
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

  async create(
    demolitionConstant: DemolitionConstant,
  ): Promise<DemolitionConstant> {
    return await this.demolitionConstantRepository.save(demolitionConstant);
  }

  async update(demolitionConstant: DemolitionConstant): Promise<UpdateResult> {
    return await this.demolitionConstantRepository.update(
      demolitionConstant.Id,
      demolitionConstant,
    );
  }

  async save(
    demolitionConstant: DemolitionConstant[],
  ): Promise<DemolitionConstant[]> {
    return await this.demolitionConstantRepository.save(demolitionConstant);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.demolitionConstantRepository.delete(id);
  }
}
