import { Module } from '@nestjs/common';
import { ApostadorrService } from './apostadorr.service';
import { ApostadorrController } from './apostadorr.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Apostadorr, ApostadorSchema } from './entities/apostadorr.entity';

@Module({
  controllers: [ApostadorrController],
  providers: [ApostadorrService],
  imports:[MongooseModule.forFeature([{
        name: Apostadorr.name,
        schema: ApostadorSchema
  }])]
})
export class ApostadorrModule {}
