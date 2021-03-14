
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  first_name: string;

  @Column({ length: 20 })
  last_name: string;

  @Column({ length: 20 })
  email: string;

  @Column({ length: 20 })
  password: string;
}