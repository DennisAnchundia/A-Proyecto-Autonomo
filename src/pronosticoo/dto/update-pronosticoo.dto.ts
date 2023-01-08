import { PartialType } from '@nestjs/swagger';
import { CreatePronosticooDto } from './create-pronosticoo.dto';

export class UpdatePronosticooDto extends PartialType(CreatePronosticooDto) {}
