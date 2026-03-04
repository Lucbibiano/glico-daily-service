import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GlucoseRecordsService } from './glucose-records.service';
import { CreateGlucoseRecordDto } from './dto/create-glucose-record.dto';
import { UpdateGlucoseRecordDto } from './dto/update-glucose-record.dto';

@Controller('glucose-records')
export class GlucoseRecordsController {
  constructor(private readonly glucoseRecordsService: GlucoseRecordsService) {}

  @Post()
  create(@Body() createGlucoseRecordDto: CreateGlucoseRecordDto) {
    return this.glucoseRecordsService.create(createGlucoseRecordDto);
  }

  @Get()
  findAll() {
    return this.glucoseRecordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.glucoseRecordsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGlucoseRecordDto: UpdateGlucoseRecordDto) {
    return this.glucoseRecordsService.update(+id, updateGlucoseRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.glucoseRecordsService.remove(+id);
  }
}
