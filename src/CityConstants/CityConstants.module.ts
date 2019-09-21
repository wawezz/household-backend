import { Module } from '@nestjs/common';
import { CityConstantsService } from './CityConstants/CityConstants.service';
import { CityConstantsController } from './CityConstants/CityConstants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityConstant } from './CityConstant.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CityConstant])],
  providers: [CityConstantsService],
  controllers: [CityConstantsController],
})
export class CityConstantsModule {}
