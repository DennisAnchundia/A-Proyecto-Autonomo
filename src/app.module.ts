import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ApostadorrModule } from './apostadorr/apostadorr.module';
import { EncuentroDeportivoModule } from './encuentro-deportivo/encuentro-deportivo.module';
import { PronosticooModule } from './pronosticoo/pronosticoo.module';
import { ContactanosModule } from './contactanos/contactanos.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGOURI),
     ApostadorrModule, EncuentroDeportivoModule, PronosticooModule, ContactanosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
