import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'DemolitionConstants' })
export class DemolitionConstant {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({
    type: 'nvarchar',
    nullable: false,
    length: 30,
  })
  ItemName: string;

  @Column({
    type: 'decimal',
    nullable: true,
  })
  CostPerSquareFoot: number;
}
