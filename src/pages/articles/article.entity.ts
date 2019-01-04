import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ArticleEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({length: 500})
  title: string;
  @Column()
  subhead: string; // 副标题
  @Column()
  author: string;
  @Column()
  copyFrom: string; // 来源
  @Column()
  content: string;
  @Column()
  keyword: string; // 关键字
  @Column()
  hits: number; // 点击数
  @Column()
  onTop: boolean; // 是否置顶
  @Column()
  isElite: boolean; // 是否推荐
  @Column()
  deleted: boolean; // 是否删除
  @Column()
  addTime: string; // 添加时间
  @Column()
  updateTime: string;
  @Column()
  creatAt: string;
  @Column()
  htmlPath: string;
  @Column()
  filesPath: string;
  @Column()
  articleStatus: boolean;
}
