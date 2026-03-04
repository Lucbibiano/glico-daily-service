import { Type } from 'class-transformer';
import { IsOptional, IsString, Length, Min } from 'class-validator';

export class CreateGlucoseRecordDto {
  @Type(() => Number)
  @Min(0)
  value: number;

  @Length(0, 20)
  @IsString()
  measurementType: string;

  @Length(0, 200)
  @IsString()
  @IsOptional()
  note: string;

  @Type(() => Date)
  measuredAt: Date;
}
