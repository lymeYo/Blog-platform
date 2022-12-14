import { PostEntity } from "src/post/entities/post.entity";
import { UserEntity } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";


@Entity('comments')
export class CommentEntity {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => UserEntity, {nullable: false})
  @JoinColumn({ name: 'userId' })
  user: UserEntity;

  @ManyToOne(() => PostEntity, {nullable: false})
  @JoinColumn({ name: 'postId' })
  post: PostEntity;

  @Column()
  text: string;

  @Column()
  rating: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;
}
