import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
  phone: string;
  @Column()
  identityType: string; // 授权类型
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
