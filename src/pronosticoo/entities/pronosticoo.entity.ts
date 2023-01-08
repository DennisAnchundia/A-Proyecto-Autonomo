import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"


@Schema()
export class Pronosticoo {

    @Prop()
    resultado_propuesto:String


    @Prop()
    valor_apuesta:String


}


export const PronosticooSchema = SchemaFactory.createForClass( Pronosticoo )
