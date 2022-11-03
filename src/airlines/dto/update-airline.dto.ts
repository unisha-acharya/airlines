import { PartialType } from '@nestjs/mapped-types';
import { IsOptional } from 'class-validator';
import { CreateAirlineDto } from './create-airline.dto';

export class UpdateAirlineDto extends PartialType(CreateAirlineDto) {
  @IsOptional()
  name: string;

  @IsOptional()
  companyName?: string;
}
