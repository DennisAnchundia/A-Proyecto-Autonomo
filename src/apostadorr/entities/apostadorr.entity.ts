import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Apostadorr {


    @Prop()
     nombre: string;


    @Prop()
     identificacion:string;
}

export const ApostadorSchema = SchemaFactory.createForClass(Apostadorr)