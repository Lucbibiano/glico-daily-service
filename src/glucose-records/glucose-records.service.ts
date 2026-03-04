import { Injectable } from '@nestjs/common';
import { CreateGlucoseRecordDto } from './dto/create-glucose-record.dto';
import { UpdateGlucoseRecordDto } from './dto/update-glucose-record.dto';

@Injectable()
export class GlucoseRecordsService {
  create(createGlucoseRecordDto: CreateGlucoseRecordDto) {
    return 'This action adds a new glucoseRecord';
  }

  findAll() {
    return `This action returns all glucoseRecords`;
  }

  findOne(id: number) {
    return `This action returns a #${id} glucoseRecord`;
  }

  update(id: number, updateGlucoseRecordDto: UpdateGlucoseRecordDto) {
    return `This action updates a #${id} glucoseRecord`;
  }

  remove(id: number) {
    return `This action removes a #${id} glucoseRecord`;
  }
}
