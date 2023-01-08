import { CreateEncuentroDTO } from "./dto/encuentro_d.dto";
import { EncuentroDService } from "./encuentro_d.service";
export declare class EncuentroDController {
    private encuentroDService;
    constructor(encuentroDService: EncuentroDService);
    createPost(res: any, createEncuentroDTO: CreateEncuentroDTO): Promise<any>;
    getEncuentros(res: any): Promise<any>;
    getEncuentro(res: any, encuentroID: any): Promise<any>;
}
