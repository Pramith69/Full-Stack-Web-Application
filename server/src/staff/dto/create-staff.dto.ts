import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';
import { StaffType } from '../entities/staff.entity';

export class CreateStaffDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  displayName: string;

  @IsEnum(StaffType)
  staffType: StaffType;

  @IsString()
  mobile: string;

  @IsEmail()
  email: string;

  @IsBoolean()
  @IsOptional()
  isAvailable?: boolean;
}
