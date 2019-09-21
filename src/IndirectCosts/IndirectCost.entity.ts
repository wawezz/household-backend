import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'IndirectCostsConstants' })
export class IndirectCost {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({
    type: 'nvarchar',
    nullable: true,
    length: 35,
  })
  ItemName: string;

  @Column({
    type: 'real',
    nullable: true,
  })
  MaterialConstant: number;

  @Column({
    type: 'real',
    nullable: true,
  })
  LabourConstant: number;

  @Column({
    type: 'real',
    nullable: true,
  })
  EquipConstant: number;

  @Column({
    type: 'real',
    nullable: true,
  })
  TotalConstant: number;

  @Column({
    type: 'bit',
    nullable: false,
  })
  IncludeInSubtotal: boolean;

  @Column({
    type: 'bit',
    nullable: false,
  })
  IsEnabled: boolean;

  @Column({
    type: 'int',
    nullable: false,
  })
  SortOrder: number;

  @Column({
    type: 'int',
    nullable: true,
  })
  QualityClass: number;
}
