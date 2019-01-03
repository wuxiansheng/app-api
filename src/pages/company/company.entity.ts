import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export  class CompanyEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
}
