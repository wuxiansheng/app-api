import { Column, Entity, JoinTable, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export  class  CustomerEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  uid: number;
  @Column()
  name: string;
  @Column()
  age: string;
  @Column()
  gender: boolean;
  @Column()
  birthday: string;
}
