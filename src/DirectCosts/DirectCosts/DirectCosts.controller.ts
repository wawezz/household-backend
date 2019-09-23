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
import moment from 'moment';
import { DirectCost } from '../DirectCost.entity';
import { DirectCostsService } from './DirectCosts.service';

@Controller('DirectCosts')
export class DirectCostsController {
  constructor(private directCostsService: DirectCostsService) {}

  @Get()
  index(@Query() params): Promise<DirectCost[]> {
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

    return this.directCostsService.findAll(query);
  }

  @Post('save')
  save(@Body() data: DirectCost[]): Promise<DirectCost[]> {
    if (!Array.isArray(data) || data.length === 0) {
      throw new HttpException('Invalid Body data.', HttpStatus.I_AM_A_TEAPOT);
    }

    return this.directCostsService.save(data);
  }

  @Post('add')
  add(@Body() data: DirectCost): Promise<DirectCost> {
    data.ModifiedDate = moment().format('YYYY-MM-DD HH:mm:ss');
    return this.directCostsService.create(data);
  }
}
