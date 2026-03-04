import { Test, TestingModule } from '@nestjs/testing';
import { GlucoseRecordsService } from './glucose-records.service';

describe('GlucoseRecordsService', () => {
  let service: GlucoseRecordsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GlucoseRecordsService],
    }).compile();

    service = module.get<GlucoseRecordsService>(GlucoseRecordsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
