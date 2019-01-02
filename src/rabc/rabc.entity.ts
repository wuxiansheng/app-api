import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export  class RabcEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  role: string;
  @Column()
  desc: string;
}
