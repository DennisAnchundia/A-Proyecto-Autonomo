import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EncuentroDeportivoService } from './encuentro-deportivo.service';
import { CreateEncuentroDeportivoDto } from './dto/create-encuentro-deportivo.dto';
import { UpdateEncuentroDeportivoDto } from './dto/update-encuentro-deportivo.dto';

@Controller('encuentro-deportivo')
export class EncuentroDeportivoController {
  constructor(private readonly encuentroDeportivoService: EncuentroDeportivoService) {}

  @Post()
  create(@Body() createEncuentroDeportivoDto: CreateEncuentroDeportivoDto) {
    return this.encuentroDeportivoService.create(createEncuentroDeportivoDto);
  }

  @Get()
  findAll() {
    return this.encuentroDeportivoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.encuentroDeportivoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEncuentroDeportivoDto: UpdateEncuentroDeportivoDto) {
    return this.encuentroDeportivoService.update(id, updateEncuentroDeportivoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.encuentroDeportivoService.remove(id);
  }
}
