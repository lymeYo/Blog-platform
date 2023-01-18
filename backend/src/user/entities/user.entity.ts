import { PostEntity } from "src/post/entities/post.entity"
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, OneToMany } from "typeorm"

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    unique: true,
  })
  username: string

  @Column({
    nullable: true,
    unique: true,
  })
  email: string

  @Column({ select: false })
  password: string
}
