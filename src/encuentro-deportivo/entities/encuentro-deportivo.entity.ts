import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class EncuentroDeportivo {
    @Prop()
    nombre: String

    @Prop()
    nombre_Eq1:String

    @Prop()
    nombre_Eq2:String

    @Prop()
    fecha:String

    @Prop()
    hora:String

}

export const EncuentroDeportivoSchema = SchemaFactory.createForClass( EncuentroDeportivo )
