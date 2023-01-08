import { CreateApostadorDTO } from "./dto/apostador.dto";
import { ApostadorService } from "./apostador.service";
export declare class ApostadorController {
    private apostadorService;
    constructor(apostadorService: ApostadorService);
    createPost(res: any, createApostadorDTO: CreateApostadorDTO): Promise<any>;
    getApostadores(res: any): Promise<any>;
    getApostador(apostadorID: string): Promise<import("./interfaces/apostador.interface").Apostador>;
}
