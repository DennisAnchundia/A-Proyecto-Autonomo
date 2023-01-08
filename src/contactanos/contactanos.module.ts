import { Module } from '@nestjs/common';
import { ContactanosService } from './contactanos.service';
import { ContactanosController } from './contactanos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Contactano, ContatanoSchema } from './entities/contactano.entity';

@Module({
  controllers: [ContactanosController],
  providers: [ContactanosService],
  imports:[MongooseModule.forFeature([{
    name: Contactano.name,
    schema: ContatanoSchema
}])]
})
export class ContactanosModule {}
