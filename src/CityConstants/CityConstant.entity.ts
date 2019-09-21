import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'CityConstants' })
export class CityConstant {
  @PrimaryGeneratedColumn()
  Id: number;

  @Column({
    type: 'nvarchar',
    nullable: true,
    length: 30,
  })
  State: string;

  @Column({
    type: 'nvarchar',
    nullable: true,
    length: 30,
  })
  City: string;

  @Column({
    type: 'real',
    nullable: true,
  })
  MaterialConstant: number;

  @Column({
    type: 'real',
    nullable: true,
  })
  EquipConstant: number;

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
