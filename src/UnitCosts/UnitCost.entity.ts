import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'UnitCosts' })
export class UnitCost {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({
    type: 'nvarchar',
    nullable: false,
    length: 150,
  })
  ItemName: string;

  @Column({
    type: 'decimal',
    nullable: true,
  })
  GeneralCostPerUnit: number;

  @Column({
    type: 'decimal',
    nullable: true,
  })
  MaterialCostPerUnit: number;

  @Column({
    type: 'decimal',
    nullable: true,
  })
  LaborCostPerUnit: number;

  @Column({
    type: 'decimal',
    nullable: true,
  })
  EquipmentCostPerUnit: number;
}
