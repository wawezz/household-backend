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
import { DemolitionConstant } from '../DemolitionConstant.entity';
import { DemolitionConstantsService } from './DemolitionConstants.service';

@Controller('DemolitionConstants')
export class DemolitionConstantsController {
  constructor(private demolitionConstantsService: DemolitionConstantsService) {}

  @Get()
  index(@Query() params): Promise<DemolitionConstant[]> {
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

    return this.demolitionConstantsService.findAll(query);
  }

  @Post('save')
  save(@Body() data: DemolitionConstant[]): Promise<DemolitionConstant[]> {
    if (!Array.isArray(data) || data.length === 0) {
      throw new HttpException('Invalid Body data.', HttpStatus.I_AM_A_TEAPOT);
    }

    return this.demolitionConstantsService.save(data);
  }
}
