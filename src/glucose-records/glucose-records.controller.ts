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
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('glucose-records')
@Controller('glucose-records')
export class GlucoseRecordsController {
  constructor(private readonly glucoseRecordsService: GlucoseRecordsService) {}

  @ApiOperation({ summary: 'Create a glucose record.' })
  @ApiResponse({
    status: 201,
    description: 'The record was created.',
    type: CreateGlucoseRecordDto,
  })
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

  @ApiResponse({
    status: 200,
    description: 'The record was updated.',
    type: CreateGlucoseRecordDto,
  })
  @ApiOperation({ summary: 'Update a glucose record' })
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

  @ApiResponse({
    status: 200,
    description: 'The records were found.',
    type: CreateGlucoseRecordDto,
  })
  @ApiOperation({ summary: 'Get all glucose records' })
  @Get()
  async findAll(
    @Param('startDate') startDate?: Date,
    @Param('endDate') endDate?: Date,
  ) {
    const rec = await this.glucoseRecordsService.findAll(startDate, endDate);
    if (!rec) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    return rec;
  }

  @ApiResponse({
    status: 200,
    description: 'The record was found.',
    type: CreateGlucoseRecordDto,
  })
  @ApiOperation({ summary: 'Get a glucose record' })
  @Get(':id')
  async get(@Param('id') id: string) {
    const rec = await this.glucoseRecordsService.findOne(id);
    if (!rec) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    return rec;
  }

  @ApiResponse({
    status: 200,
    description: 'The record was deleted.',
    type: CreateGlucoseRecordDto,
  })
  @ApiOperation({ summary: 'Delete a glucose record' })
  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deleted = await this.glucoseRecordsService.remove(id);
    if (!deleted) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    return { success: true };
  }
}
