import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'DirectCostsTest' })
export class DirectCost {
  @PrimaryGeneratedColumn()
  Id: number;
}
