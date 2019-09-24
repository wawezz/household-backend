import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { DirectCost } from './../DirectCosts/DirectCost.entity';
import { type } from 'os';

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

  @ManyToOne(type => DirectCost)
  @JoinColumn({ name: 'LineItemId' })
  directCost: DirectCost;
}
