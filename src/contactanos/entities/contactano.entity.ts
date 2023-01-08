import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Contactano {

    @Prop()
    nombre: string;


   @Prop()
    identificacion:string;

   @Prop()
    Mensaje:string;


}

export const ContatanoSchema = SchemaFactory.createForClass( Contactano )
