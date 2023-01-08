import { Document } from "mongoose";
export interface Encuentro extends Document {
    readonly nombre: string;
    readonly nombre_Eq1: string;
    readonly nombre_Eq2: string;
    readonly fecha: string;
    readonly hora: string;
}
