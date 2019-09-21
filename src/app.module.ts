import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasicCostsModule } from './BasicCosts/BasicCosts.module';
import { CityConstantsModule } from './CityConstants/CityConstants.module';
import { CostDistributionsModule } from './CostDistributions/CostDistributions.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    BasicCostsModule,
    CityConstantsModule,
    CostDistributionsModule,
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
