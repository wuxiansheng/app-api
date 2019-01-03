import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class CommentEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  articleId: number;
  @Column()
  articleType: string;
  @Column()
  content: string;
  @Column()
  formUid: number;
}
