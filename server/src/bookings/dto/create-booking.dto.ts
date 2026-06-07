import {
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { BookingStatus } from '../entities/booking.entity';

export class CreateBookingDto {
  @IsNumber()
  customerId: number;

  @IsNumber()
  staffId: number;

  @IsString()
  purpose: string;

  @IsDateString()
  bookingDateTime: string;

  @IsEnum(BookingStatus)
  @IsOptional()
  status?: BookingStatus;
}
