import { Module } from '@nestjs/common';
import { GlucoseRecordsService } from './glucose-records.service';
import { GlucoseRecordsController } from './glucose-records.controller';

@Module({
  controllers: [GlucoseRecordsController],
  providers: [GlucoseRecordsService],
})
export class GlucoseRecordsModule {}
