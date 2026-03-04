import { Type } from 'class-transformer';
import { IsEnum,  IsOptional, IsString, Length, Min } from 'class-validator';
import { MeasurementType } from '../measurement-type.model';

export class CreateGlucoseRecordDto {
  @Type(() => Number)
  @Min(0)
  value: number;

  @Length(0, 20)
  @IsEnum(MeasurementType)
  measurementType: MeasurementType;

  @Length(0, 200)
  @IsString()
  @IsOptional()
  note: string;

  @Type(() => Date)
  measuredAt: Date;
}
