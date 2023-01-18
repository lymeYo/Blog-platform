import { UserEntity } from 'src/user/entities/user.entity'
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne, OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";
import { CommentEntity } from "../../comment/entities/comment.entity";

@Entity('posts')
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  userId: number

  @ManyToOne(() => UserEntity, {
    nullable: false,
    eager: true,
  })
  user: UserEntity

  @OneToMany(() => CommentEntity, (comment) => comment.post, {
    eager: true,
  })
  comments: CommentEntity[]

  @Column()
  title: string

  @Column()
  body: string

  @Column()
  rating: number

  @Column({
    default: 0,
  })
  views: number

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date
}
