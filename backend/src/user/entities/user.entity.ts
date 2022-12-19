import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
import { IsEmail } from 'class-validator';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  password?: string;
}