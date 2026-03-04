import { Type } from 'class-transformer';
import {
  IsEnum,
  IsOptional,
  IsString,
  Length,
  Max,
  Min,
} from 'class-validator';
import { MeasurementType } from '../measurement-type.model';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGlucoseRecordDto {
  @ApiProperty({
    example: 108,
    description: 'Glucose value in mg/dL',
  })
  @Type(() => Number)
  @Min(20)
  @Max(600)
  value: number;

  @ApiProperty({
    example: 'FASTING',
  })
  @Length(0, 20)
  @IsEnum(MeasurementType)
  measurementType: MeasurementType;

  @ApiProperty({
    example: 'I ate pizza last night.',
    required: false,
  })
  @Length(0, 200)
  @IsString()
  @IsOptional()
  note: string;

  @Type(() => Date)
  measuredAt: Date;
}
