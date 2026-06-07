import { Customer } from 'src/customers/entities/customer.entity';
import { Staff } from 'src/staff/entities/staff.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export enum BookingStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  CANCELLED = 'cancelled',
  COMPLETED = 'completed',
}

@Entity('bookings')
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customer, (customer) => customer.bookings)
  @JoinColumn({ name: 'customer_id' })
  customer: Customer;

  @ManyToOne(() => Staff, (staff) => staff.bookings)
  @JoinColumn({ name: 'staff_id' })
  staff: Staff;

  @Column({ type: 'varchar2', length: 255 })
  purpose: string;

  @Column({ type: 'timestamp' })
  bookingDateTime: Date;

  @Column({ type: 'varchar2', length: 20, default: BookingStatus.PENDING })
  status: BookingStatus;

  @CreateDateColumn()
  createdAt: Date;

  @CreateDateColumn()
  modifiedAt: Date;
}
