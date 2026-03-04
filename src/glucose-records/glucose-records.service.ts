import { Injectable } from '@nestjs/common';
import { CreateGlucoseRecordDto } from './dto/create-glucose-record.dto';
import { UpdateGlucoseRecordDto } from './dto/update-glucose-record.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { GlucoseRecord } from './entities/glucose-record.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GlucoseRecordsService {
  constructor(
    @InjectRepository(GlucoseRecord)
    private glicoseRepository: Repository<GlucoseRecord>,
  ) {}

  async create(createGlucoseRecordDto: CreateGlucoseRecordDto) {
    if (!createGlucoseRecordDto) {
      throw new Error(
        'O payload está inválido, por favor verifique e tente novamente.',
      );
    }

    const req = this.glicoseRepository.create({
      value: createGlucoseRecordDto.value,
      measurementType: createGlucoseRecordDto.measurementType,
      createdAt: new Date(),
      note: createGlucoseRecordDto.note,
      measuredAt: createGlucoseRecordDto.measuredAt,
    });

    return this.glicoseRepository.save(req);
  }

  async findAll() {
    return this.glicoseRepository.find({ order: { createdAt: 'DESC' } });
  }

  async findOne(id: string) {
    return this.glicoseRepository.findOne({ where: { id } });
  }

  async update(id: string, dto: Partial<CreateGlucoseRecordDto>) {
    const rec = await this.glicoseRepository.findOne({ where: { id } });
    if (!rec) {
      throw new Error('Recommendation not found');
    }

    return this.glicoseRepository.save({ ...rec, ...dto });
  }

  async remove(id: string) {
    const res = await this.glicoseRepository.delete(id);
    return res.affected && res.affected > 0;
  }
}
