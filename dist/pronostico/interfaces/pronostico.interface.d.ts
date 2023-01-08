import { Document } from "mongoose";
export interface Pronostico extends Document {
    readonly resultado_propuesto: string;
    readonly valor_apuesta: string;
}
