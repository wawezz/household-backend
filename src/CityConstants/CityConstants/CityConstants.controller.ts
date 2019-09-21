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
import { CityConstant } from '../CityConstant.entity';
import { CityConstantsService } from './CityConstants.service';

@Controller('CityConstants')
export class CityConstantsController {
  constructor(private cityConstantsService: CityConstantsService) {}

  @Get()
  index(@Query() params): Promise<CityConstant[]> {
    const sort =
      params.sort && params.sort != '[]' ? JSON.parse(params.sort) : '';
    const filter =
      params.filter && params.filter != '[]' ? JSON.parse(params.filter) : '';
    let order = { id: 'DESC' };
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

    return this.cityConstantsService.findAll(query);
  }

  @Post('save')
  save(@Body() data: CityConstant[]): Promise<CityConstant[]> {
    if (!Array.isArray(data) || data.length === 0) {
      throw new HttpException('Invalid Body data.', HttpStatus.I_AM_A_TEAPOT);
    }

    return this.cityConstantsService.save(data);
  }
}
