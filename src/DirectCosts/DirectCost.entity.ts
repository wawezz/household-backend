import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'DirectCosts' })
export class DirectCost {
  @PrimaryGeneratedColumn()
  Id: number;
}
