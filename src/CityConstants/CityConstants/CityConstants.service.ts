import { Injectable } from '@nestjs/common';
import { Repository, ConnectionManager } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CityConstant } from '../CityConstant.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class CityConstantsService {
  constructor(
    @InjectRepository(CityConstant)
    private cityConstantRepository: Repository<CityConstant>,
  ) {}

  async findAll(query): Promise<any> {
    const [result, total] = await this.cityConstantRepository.findAndCount({
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

  async create(cityConstant: CityConstant): Promise<CityConstant> {
    return await this.cityConstantRepository.save(cityConstant);
  }

  async update(cityConstant: CityConstant): Promise<UpdateResult> {
    return await this.cityConstantRepository.update(
      cityConstant.Id,
      cityConstant,
    );
  }

  async save(cityConstant: CityConstant[]): Promise<CityConstant[]> {
    return await this.cityConstantRepository.save(cityConstant);
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.cityConstantRepository.delete(id);
  }
}
