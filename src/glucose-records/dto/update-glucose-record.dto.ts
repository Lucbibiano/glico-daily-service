import { PartialType } from '@nestjs/mapped-types';
import { CreateGlucoseRecordDto } from './create-glucose-record.dto';

export class UpdateGlucoseRecordDto extends PartialType(CreateGlucoseRecordDto) {}
