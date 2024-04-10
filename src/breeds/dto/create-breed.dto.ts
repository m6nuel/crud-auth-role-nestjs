import { IsString, Length } from 'class-validator';

export class CreateBreedDto {
  @IsString()
  @Length(3, 20)
  name: string;
}
