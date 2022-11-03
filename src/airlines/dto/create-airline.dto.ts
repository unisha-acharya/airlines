import { IsString } from 'class-validator';

export class CreateAirlineDto {
  @IsString()
  name: string;
  @IsString()
  companyName: string;
}
