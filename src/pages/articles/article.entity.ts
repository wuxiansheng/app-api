import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({length: 500})
  title: string;
  @Column()
  author: string;
  @Column()
  content: string;
}
