import { IsEmail, IsEnum, IsString, MinLength } from 'class-validator';
import { UserType } from '../entities/user.entity';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  username: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  mobile: string;

  @IsEmail()
  email: string;

  @IsEnum(UserType)
  userType: UserType;
}
