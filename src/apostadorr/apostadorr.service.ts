import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import e from 'express';
import { Model } from 'mongoose';
import { CreateApostadorrDto } from './dto/create-apostadorr.dto';
import { UpdateApostadorrDto } from './dto/update-apostadorr.dto';
import { Apostadorr } from './entities/apostadorr.entity';

@Injectable()
export class ApostadorrService {
  constructor(
    @InjectModel(Apostadorr.name)
    private readonly ApostadorSchema: Model<Apostadorr>

  ){

  }
  async create(createApostadorrDto: CreateApostadorrDto) {
    const apostador = await this.ApostadorSchema.create( createApostadorrDto )
    return apostador;
  }

  findAll() {
    return this.ApostadorSchema.find();
  }

  async findOne(id: string) {
    const apostador = await this.ApostadorSchema.findById(id)
    return apostador;
  }

  async update(id: string, updateApostadorrDto: UpdateApostadorrDto) {
    const apostador = await this.ApostadorSchema.findById( id )
    await apostador.updateOne(updateApostadorrDto)
    return apostador;
  }

  async remove(id: string) {
    const apostador = await this.ApostadorSchema.findById( id )
    await apostador.deleteOne()
    return 'eliminado';
  }
}
