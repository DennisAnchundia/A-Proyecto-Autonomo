import { PartialType } from '@nestjs/swagger';
import { CreateApostadorrDto } from './create-apostadorr.dto';

export class UpdateApostadorrDto extends PartialType(CreateApostadorrDto) {}
