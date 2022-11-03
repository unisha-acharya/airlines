import {
  IsDate,
  IsEmail,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateReservationDto {
  @IsString()
  name: string;
  @IsString()
  dob: string;
  @IsString()
  contactPerson: string;
  @IsEmail()
  email: string;
  @IsNumber()
  phoneNumber: number;
  @IsString()
  address: string;
  @IsString()
  @IsOptional()
  streetAddress: string;
  @IsString()
  @IsOptional()
  streetAddressLine2: string;
  @IsString()
  @IsOptional()
  city: string;
  @IsString()
  @IsOptional()
  stateProvince: string;
  @IsString()
  @IsOptional()
  postalZipCode: string;
  @IsString()
  country: string;
  @IsString()
  depatureDateNTime: string;
  @IsString()
  returnDateNTime: string;
  @IsString()
  depatureFrom: string;
  @IsString()
  depatureCity: string;
  @IsString()
  destination: string;
  @IsString()
  destinationCity: string;
  // @IsOptional()
  @IsString()
  // @IsEnum([
  //   'Nepal Royal Airlines',
  //   'himalayan Airlines',
  //   'Quatar Airlines',
  //   'Yeti Airlines',
  // ])
  airlineId: any;
  @IsString()
  // @IsEnum(['1500', '2000', '3000', '5000'])
  fare: string;
}
