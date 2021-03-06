import {
  Controller,
  Get,
  Query,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { CostDistribution } from '../CostDistribution.entity';
import { CostDistributionsService } from './CostDistributions.service';

@Controller('CostDistributions')
export class CostDistributionsController {
  constructor(private costDistributionsService: CostDistributionsService) {}

  @Get()
  index(@Query() params): Promise<CostDistribution[]> {
    const sort =
      params.sort && params.sort != '[]' ? JSON.parse(params.sort) : '';
    const filter =
      params.filter && params.filter != '[]' ? JSON.parse(params.filter) : '';
    let order = { Id: 'DESC' };
    let where = {};

    if (filter) {
      for (const [key, value] of Object.entries(filter)) {
        const data = (value as string).split('|');
        if (data[0] == '=') {
          where[key] = data[1];
        }
      }
    }

    if (sort) {
      order = sort;
    }

    const query = {
      skip: params.skip || 0,
      take: params.take || 25,
      order: order,
      where: where,
    };

    return this.costDistributionsService.findAll(query);
  }

  @Post('save')
  save(@Body() data: CostDistribution[]): Promise<CostDistribution[]> {
    if (!Array.isArray(data) || data.length === 0) {
      throw new HttpException('Invalid Body data.', HttpStatus.I_AM_A_TEAPOT);
    }

    return this.costDistributionsService.save(data);
  }
}
