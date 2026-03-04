import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlucoseRecordsModule } from './glucose-records/glucose-records.module';

@Module({
  imports: [GlucoseRecordsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
