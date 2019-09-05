import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BasicCost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  NumberOfCorners: number;

  @Column({
    type: 'real',
    nullable: false,
  })
  QualityGroup: number;

  @Column({
    type: 'real',
    nullable: false,
  })
  AreaGroup: number;

  @Column({
    type: 'money',
    nullable: false,
  })
  CostPerSquareFoot: number;

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
