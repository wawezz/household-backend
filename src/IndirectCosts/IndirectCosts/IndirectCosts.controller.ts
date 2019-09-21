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
import { IndirectCost } from '../IndirectCost.entity';
import { IndirectCostsService } from './IndirectCosts.service';

@Controller('IndirectCosts')
export class IndirectCostsController {
  constructor(private indirectCostsService: IndirectCostsService) {}

  @Get()
  index(@Query() params): Promise<IndirectCost[]> {
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

    return this.indirectCostsService.findAll(query);
  }

  @Post('save')
  save(@Body() data: IndirectCost[]): Promise<IndirectCost[]> {
    if (!Array.isArray(data) || data.length === 0) {
      throw new HttpException('Invalid Body data.', HttpStatus.I_AM_A_TEAPOT);
    }

    return this.indirectCostsService.save(data);
  }
}
