import { Test, TestingModule } from '@nestjs/testing';
import { GlucoseRecordsController } from './glucose-records.controller';
import { GlucoseRecordsService } from './glucose-records.service';

describe('GlucoseRecordsController', () => {
  let controller: GlucoseRecordsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GlucoseRecordsController],
      providers: [GlucoseRecordsService],
    }).compile();

    controller = module.get<GlucoseRecordsController>(GlucoseRecordsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
