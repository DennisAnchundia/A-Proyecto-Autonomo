import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PronosticooService } from './pronosticoo.service';
import { CreatePronosticooDto } from './dto/create-pronosticoo.dto';
import { UpdatePronosticooDto } from './dto/update-pronosticoo.dto';

@Controller('pronosticoo')
export class PronosticooController {
  constructor(private readonly pronosticooService: PronosticooService) {}

  @Post()
  create(@Body() createPronosticooDto: CreatePronosticooDto) {
    return this.pronosticooService.create(createPronosticooDto);
  }

  @Get()
  findAll() {
    return this.pronosticooService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pronosticooService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePronosticooDto: UpdatePronosticooDto) {
    return this.pronosticooService.update(id, updatePronosticooDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pronosticooService.remove(id);
  }
}
