import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum UserType {
  ADMIN = 'admin',
  MANAGER = 'manager',
  STAFF = 'staff',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar2', length: 50 })
  firstName: string;

  @Column({ type: 'varchar2', length: 50 })
  lastName: string;

  @Column({ type: 'varchar2', length: 50, unique: true })
  username: string;

  @Column({ type: 'varchar2', length: 100 })
  password: string;

  @Column({ type: 'varchar2', length: 15 })
  mobile: string;

  @Column({ type: 'varchar2', length: 100, unique: true })
  email: string;

  @Column({ type: 'varchar2', length: 20, default: UserType.STAFF })
  userType: UserType;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  modifiedAt: Date;
}
