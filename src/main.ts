import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(join(__dirname, '..', 'view'));
  app.setViewEngine('hbs');
  app.enableCors();
  //  títulos de documentación
  const options = new DocumentBuilder() 
    .setTitle('Trabajo Atuónomo')
    .setDescription('API REST para apuestas deportivas con MongoDB')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options); 

  // La ruta en que se sirve la documentación
  SwaggerModule.setup('docs', app, document); 

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
