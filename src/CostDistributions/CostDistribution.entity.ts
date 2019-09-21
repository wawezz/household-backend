import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
  LineItemId: string;

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

  @Column({
    type: 'nvarchar',
    nullable: true,
    length: 100,
  })
  ModifiedBy: string;

  @Column({
    type: 'datetime',
    nullable: true,
  })
  ModifiedDate: string;
}
