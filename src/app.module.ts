import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasicCostsModule } from './BasicCosts/BasicCosts.module';
import { CityConstantsModule } from './CityConstants/CityConstants.module';
import { CostDistributionsModule } from './CostDistributions/CostDistributions.module';
import { DemolitionConstantsModule } from './DemolitionConstants/DemolitionConstants.module';
import { DirectCostsModule } from './DirectCosts/DirectCosts.module';
import { IndirectCostsModule } from './IndirectCosts/IndirectCosts.module';
import { UnitCostsModule } from './UnitCosts/UnitCosts.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    BasicCostsModule,
    CityConstantsModule,
    CostDistributionsModule,
    DemolitionConstantsModule,
    DirectCostsModule,
    IndirectCostsModule,
    UnitCostsModule,
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: 'had592suk1.database.windows.net',
      port: 1433,
      database: 'nae-editor-test',
      username: 'naeeditor',
      password: 'Scottishfold11#',
      options: {
        useUTC: true,
        encrypt: true,
      },
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
