import { Column, Entity, JoinTable, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../users/user.entity';

@Entity()
export class AuthEntity {
  @PrimaryGeneratedColumn()
  id: string
  @Column()
  username: string;
  @Column()
  password: string;
  @Column()
  email: string;
  @Column()
  phone: number;
  @Column()
  identityType: string; // 授权类型
  @OneToOne(type => UserEntity, userEntity => userEntity.id)
  @JoinTable()
  user: UserEntity;
  @Column()
  indentifier: string; // 授权标识ID
  @Column()
  credential: string; // accessToken
  @Column()
  credentialExpire: string; // token过期时间
  @Column()
  lastLoginTime: string;
  @Column()
  loginIp: string;
 @Column()
  status: boolean;
}
