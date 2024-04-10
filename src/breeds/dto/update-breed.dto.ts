import { IsOptional, IsString, Length } from 'class-validator';

export class UpdateBreedDto {
  @IsString()
  @Length(3, 20)
  @IsOptional()
  name: string;
}
