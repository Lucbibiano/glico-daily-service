import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { GlucoseRecordsService } from './glucose-records.service';
import { CreateGlucoseRecordDto } from './dto/create-glucose-record.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('glucose-records')
@Controller('glucose-records')
export class GlucoseRecordsController {
  constructor(private readonly glucoseRecordsService: GlucoseRecordsService) {}

  @Post()
  async create(@Body() createGlucoseRecordDto: CreateGlucoseRecordDto) {
    try {
      const saved = await this.glucoseRecordsService.create(
        createGlucoseRecordDto,
      );
      return { success: true, data: saved };
    } catch (error: any) {
      throw new HttpException(
        { success: false, message: error.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: Partial<CreateGlucoseRecordDto>,
  ) {
    try {
      const updated = await this.glucoseRecordsService.update(id, dto);
      return { success: true, data: updated };
    } catch (err: any) {
      throw new HttpException(
        { success: false, message: err.message },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  @Get()
  async findAll(
    @Param('startDate') startDate?: Date,
    @Param('endDate') endDate?: Date,
  ) {
    const rec = await this.glucoseRecordsService.findAll(startDate, endDate);
    if (!rec) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    return rec;
  }

  @Get(':id')
  async get(@Param('id') id: string) {
    const rec = await this.glucoseRecordsService.findOne(id);
    if (!rec) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    return rec;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deleted = await this.glucoseRecordsService.remove(id);
    if (!deleted) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    return { success: true };
  }
}
