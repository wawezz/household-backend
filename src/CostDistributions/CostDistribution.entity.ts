import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { DirectCost } from './../DirectCosts/DirectCost.entity';

@Entity({ name: 'CostDistributions' })
export class CostDistribution {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({
    type: 'nvarchar',
    nullable: false,
    length: 150,
  })
  ItemName: string;

  @Column({
    type: 'int',
    nullable: false,
  })
  LineItemId: number;

  @OneToOne(type => DirectCost, directCost => directCost.Id)
  directCost: DirectCost;

  @Column({
    type: 'decimal',
    nullable: true,
  })
  MaterialDistribution: number;

  @Column({
    type: 'decimal',
    nullable: true,
  })
  LaborDistribution: number;
}
