import { Model } from "mongoose";
import { Pronostico } from "./interfaces/pronostico.interface";
import { CreatePronosticoDTO } from "./dto/pronostico.dto";
export declare class PronosticoService {
    private readonly pronosticoModel;
    constructor(pronosticoModel: Model<Pronostico>);
    getPronosticos(): Promise<Pronostico[]>;
    getPronostico(pronosticoID?: string): Promise<Pronostico>;
    createPronostico(createPronosticoDTO: CreatePronosticoDTO): Promise<Pronostico>;
    updatePronostico(pronosticoID: string, createPronosticoDTO: CreatePronosticoDTO): Promise<Pronostico>;
    deletePronostico(pronosticoID: string): Promise<Pronostico>;
}
