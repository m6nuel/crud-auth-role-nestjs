// import { PartialType } from '@nestjs/mapped-types';
// import { CreateCatDto } from './create-cat.dto';
import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export class UpdateCatDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  @IsOptional()
  name?: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @IsOptional()
  age?: number;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  breed?: string;
}
