import { IsEmail, IsString, MinLength } from 'class-validator';

export class CreateCustomerDto {
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

  @IsString()
  address: string;
}
