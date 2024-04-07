import {
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export class CreateCatDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 20)
  name: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  age: number;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  breed?: string;
}
