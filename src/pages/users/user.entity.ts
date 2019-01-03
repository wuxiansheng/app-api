import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export  class  UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  uid: number;
  @Column()
  nickname: string;
  @Column()
  age: string;
  @Column()
  avatar: string;
  @Column()
  address: string;
  @Column()
  company: string;
}
