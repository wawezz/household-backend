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
import { BasicCost } from '../BasicCost.entity';
import { BasicCostsService } from './BasicCosts.service';

@Controller('BasicCosts')
export class BasicCostsController {
  constructor(private basicCostsService: BasicCostsService) {}

  @Get()
  index(@Query() params): Promise<BasicCost[]> {
    const query = {
      skip: params.skip || 0,
      take: params.take || 25,
      order: { id: 'DESC' },
    };
    return this.basicCostsService.findAll(query);
  }

  @Post('save')
  save(@Body() data: BasicCost[]): Promise<BasicCost[]> {
    if (!Array.isArray(data) || data.length === 0) {
      throw new HttpException('Invalid Body data.', HttpStatus.I_AM_A_TEAPOT);
    }

    return this.basicCostsService.save(data);
  }

  @Get('priceupdate')
  priceupdate(@Query() params): Promise<any> {
    const percent = parseInt(params.percent) || 0;
    const action = params.action;

    if (percent < 1) {
      throw new HttpException(
        'Invalid percent value.',
        HttpStatus.I_AM_A_TEAPOT,
      );
    }

    if (action != '+' && action != '-') {
      throw new HttpException(
        'Invalid action, should be: +/-.',
        HttpStatus.I_AM_A_TEAPOT,
      );
    }

    return this.basicCostsService.priceupdate(percent, action);
  }
}
