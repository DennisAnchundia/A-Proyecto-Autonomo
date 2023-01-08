import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateEncuentroDeportivoDto } from './dto/create-encuentro-deportivo.dto';
import { UpdateEncuentroDeportivoDto } from './dto/update-encuentro-deportivo.dto';
import { EncuentroDeportivo } from './entities/encuentro-deportivo.entity';

@Injectable()
export class EncuentroDeportivoService {

  constructor(
    @InjectModel(EncuentroDeportivo.name)
    private readonly EcnutrnodeportivoSchema: Model<EncuentroDeportivo>

  ){

  }
  async create(createEncuentroDeportivoDto: CreateEncuentroDeportivoDto) {
    const Ecnuntro = await this.EcnutrnodeportivoSchema.create( createEncuentroDeportivoDto )
    return Ecnuntro;
  }

  findAll() {
    return this.EcnutrnodeportivoSchema.find();
  }

  async findOne(id: string) {
    const Ecnuntro = await this.EcnutrnodeportivoSchema.findById(id)
    return Ecnuntro;
  }

  async update(id: string, updateEncuentroDeportivoDto: UpdateEncuentroDeportivoDto) {
    const Ecnuntro = await this.EcnutrnodeportivoSchema.findById( id )
    await Ecnuntro.updateOne(updateEncuentroDeportivoDto)
    return Ecnuntro;
  }

  async remove(id: string) {
    const Ecnuntro = await this.EcnutrnodeportivoSchema.findById( id )
    await Ecnuntro.deleteOne()
    return 'eliminado';
  }
}
