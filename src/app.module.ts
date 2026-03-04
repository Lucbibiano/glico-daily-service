import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlucoseRecordsModule } from './glucose-records/glucose-records.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GlucoseRecord } from './glucose-records/entities/glucose-record.entity';

@Module({
  imports: [
    GlucoseRecordsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || '127.0.0.1',
      port: parseInt(process.env.DATABASE_PORT || '5432', 10),
      username: process.env.DATABASE_USER || 'postgres',
      password: process.env.DATABASE_PASSWORD || 'postgres',
      database: process.env.DATABASE_NAME || 'glicodaily',
      autoLoadEntities: true,
      synchronize: true,
      extra: {
        connectionTimeoutMillis: Number(process.env.DB_CONN_TIMEOUT || 60000),
        max: Number(process.env.DB_POOL_MAX || 10),
      },
    }),
    TypeOrmModule.forFeature([GlucoseRecord]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
