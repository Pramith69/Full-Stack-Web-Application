import { Booking } from 'src/bookings/entities/booking.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('customers')
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar2', length: 50 })
  firstName: string;

  @Column({ type: 'varchar2', length: 50 })
  lastName: string;

  @Column({ type: 'varchar2', length: 50, unique: true })
  username: string;

  @Column({ type: 'varchar2', length: 255 })
  password: string;

  @Column({ type: 'varchar2', length: 15 })
  mobile: string;

  @Column({ type: 'varchar2', length: 100, unique: true })
  email: string;

  @Column({ type: 'varchar2', length: 255 })
  address: string;

  @OneToMany(() => Booking, (booking) => booking.customer)
  bookings: Booking[];

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  modifiedAt: Date;
}
