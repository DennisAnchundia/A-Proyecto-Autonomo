import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePronosticooDto } from './dto/create-pronosticoo.dto';
import { UpdatePronosticooDto } from './dto/update-pronosticoo.dto';
import { Pronosticoo } from './entities/pronosticoo.entity';

@Injectable()
export class PronosticooService {

  constructor(
    @InjectModel(Pronosticoo.name)
    private readonly PronosticooSchema: Model<Pronosticoo>

  ){

  }

  async create(createPronosticooDto: CreatePronosticooDto) {
    const Pronostico = await this.PronosticooSchema.create( createPronosticooDto )
    return Pronostico;
  }

  findAll() {
    return this.PronosticooSchema.find();
  }

  async findOne(id: string) {
    const Pronostico = await this.PronosticooSchema.findById(id)
    return Pronostico;
  }

  async update(id: string, updatePronosticooDto: UpdatePronosticooDto) {
    const Pronostico = await this.PronosticooSchema.findById( id )
    await Pronostico.updateOne(updatePronosticooDto)
    return Pronostico;
  }

  async remove(id: string) {
    const Pronostico = await this.PronosticooSchema.findById( id )
    await Pronostico.deleteOne()
    return 'eliminado';
  }
}
