import { Model } from "mongoose";
import { Apostador } from "./interfaces/apostador.interface";
import { CreateApostadorDTO } from "./dto/apostador.dto";
export declare class ApostadorService {
    private readonly apostadorModel;
    constructor(apostadorModel: Model<Apostador>);
    getApostadores(): Promise<Apostador[]>;
    getApostador(apostadorID: string): Promise<Apostador>;
    createApostador(createApostadorDTO: CreateApostadorDTO): Promise<Apostador>;
    updateApostador(apostadorID: string, createApostadorDTO: CreateApostadorDTO): Promise<Apostador>;
    deleteApostador(apostadorID: string): Promise<Apostador>;
}
