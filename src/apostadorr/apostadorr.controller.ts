import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApostadorrService } from './apostadorr.service';
import { CreateApostadorrDto } from './dto/create-apostadorr.dto';
import { UpdateApostadorrDto } from './dto/update-apostadorr.dto';

@Controller('apostadorr')
export class ApostadorrController {
  constructor(private readonly apostadorrService: ApostadorrService) {}

  @Post()
  create(@Body() createApostadorrDto: CreateApostadorrDto) {
    return this.apostadorrService.create(createApostadorrDto);
  }

  @Get()
  findAll() {
    return this.apostadorrService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apostadorrService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApostadorrDto: UpdateApostadorrDto) {
    return this.apostadorrService.update(id, updateApostadorrDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apostadorrService.remove(id);
  }
}
