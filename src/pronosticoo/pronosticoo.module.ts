import { Module } from '@nestjs/common';
import { PronosticooService } from './pronosticoo.service';
import { PronosticooController } from './pronosticoo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pronosticoo, PronosticooSchema } from './entities/pronosticoo.entity';

@Module({
  controllers: [PronosticooController],
  providers: [PronosticooService], 
  imports:[
    
    MongooseModule.forFeature([{
      name: Pronosticoo.name,
      schema: PronosticooSchema
}])

  ]
})
export class PronosticooModule {}
