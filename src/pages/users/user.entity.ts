import { Column, Entity, JoinColumn, JoinTable, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CompanyEntity } from '../company/company.entity';

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
  @OneToOne(type => CompanyEntity)
  @JoinTable()
  company: CompanyEntity;
}
