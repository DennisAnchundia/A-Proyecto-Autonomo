import { Document } from "mongoose";
export interface Apostador extends Document {
    readonly nombre: string;
    readonly identificacion: string;
}
