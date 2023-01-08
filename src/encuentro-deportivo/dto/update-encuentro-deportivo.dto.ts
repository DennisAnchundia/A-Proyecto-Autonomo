import { PartialType } from '@nestjs/swagger';
import { CreateEncuentroDeportivoDto } from './create-encuentro-deportivo.dto';

export class UpdateEncuentroDeportivoDto extends PartialType(CreateEncuentroDeportivoDto) {}
