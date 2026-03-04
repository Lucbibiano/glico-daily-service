import { Module } from '@nestjs/common';
import { GlucoseRecordsService } from './glucose-records.service';
import { GlucoseRecordsController } from './glucose-records.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GlucoseRecord } from './entities/glucose-record.entity';

@Module({
  controllers: [GlucoseRecordsController],
  providers: [GlucoseRecordsService,],
  imports: [TypeOrmModule.forFeature([GlucoseRecord])],
})
export class GlucoseRecordsModule {}
