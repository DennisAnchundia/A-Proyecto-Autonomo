import { CreatePronosticoDTO } from "./dto/pronostico.dto";
import { PronosticoService } from "./pronostico.service";
export declare class PronosticoController {
    private pronosticoService;
    constructor(pronosticoService: PronosticoService);
    acreatePost(res: any, createPronosticoDTO: CreatePronosticoDTO): Promise<any>;
    getPronosticos(res: any): Promise<any>;
    getEncuentro(res: any, pronosticoID: any): Promise<any>;
}
