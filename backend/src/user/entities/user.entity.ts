import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from "typeorm"
import { IsEmail } from 'class-validator';

@Entity('users')
export class UserEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  password: string;
}
