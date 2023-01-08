import { Module } from '@nestjs/common';
import { EncuentroDeportivoService } from './encuentro-deportivo.service';
import { EncuentroDeportivoController } from './encuentro-deportivo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { EncuentroDeportivo, EncuentroDeportivoSchema } from './entities/encuentro-deportivo.entity';

@Module({
  controllers: [EncuentroDeportivoController],
  providers: [EncuentroDeportivoService],
  imports:[

    MongooseModule.forFeature([{
      name: EncuentroDeportivo.name,
      schema: EncuentroDeportivoSchema
}])
  ]
})
export class EncuentroDeportivoModule {}
