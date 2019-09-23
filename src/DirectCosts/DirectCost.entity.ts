import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'CompConstants' })
export class DirectCost {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({
    type: 'nvarchar',
    nullable: true,
    length: 50,
  })
  GroupID: string;

  @Column({
    type: 'nvarchar',
    nullable: true,
    length: 50,
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
    type: 'int',
    nullable: false,
  })
  ItemID: number;

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

  @Column({
    type: 'bit',
    nullable: true,
  })
  Masonry: boolean;
}
