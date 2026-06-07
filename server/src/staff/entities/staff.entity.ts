import { Booking } from 'src/bookings/entities/booking.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum StaffType {
  HAIR_STYLIST = 'hair_stylist',
  COLORIST = 'colorist',
  BARBER = 'barber',
  NAIL_TECHNICIAN = 'nail_technician',
  ESTHETICIAN = 'esthetician',
}

@Entity('staff')
export class Staff {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar2', length: 50 })
  firstName: string;

  @Column({ type: 'varchar2', length: 50 })
  lastName: string;

  @Column({ type: 'varchar2', length: 100 })
  displayName: string;

  @Column({ type: 'varchar2', length: 30 })
  staffType: StaffType;

  @Column({ type: 'varchar2', length: 15 })
  mobile: string;

  @Column({ type: 'varchar2', length: 100, unique: true })
  email: string;

  @Column({ default: true })
  isAvailable: boolean;

  @OneToMany(() => Booking, (booking) => booking.staff)
  bookings: Booking[];
}
