import { Model } from "mongoose";
import { Encuentro } from "./interfaces/ecuentro_d.interface";
import { CreateEncuentroDTO } from "./dto/encuentro_d.dto";
export declare class EncuentroDService {
    private readonly encuentroModel;
    constructor(encuentroModel: Model<Encuentro>);
    getEncuentros(): Promise<Encuentro[]>;
    getEncuentro(encuentroID?: string): Promise<Encuentro>;
    createEncuentro(createEncuentroDTO: CreateEncuentroDTO): Promise<Encuentro>;
    updateEncuentro(encuentroID: string, createEncuentroDTO: CreateEncuentroDTO): Promise<Encuentro>;
    deleteEncuentro(encuentroID: string): Promise<Encuentro>;
}
