/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ApostadorrService } from './apostadorr.service';
import { CreateApostadorrDto } from './dto/create-apostadorr.dto';
import { UpdateApostadorrDto } from './dto/update-apostadorr.dto';
export declare class ApostadorrController {
    private readonly apostadorrService;
    constructor(apostadorrService: ApostadorrService);
    create(createApostadorrDto: CreateApostadorrDto): Promise<import("mongoose").Document<unknown, any, import("./entities/apostadorr.entity").Apostadorr> & import("./entities/apostadorr.entity").Apostadorr & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, any, import("./entities/apostadorr.entity").Apostadorr> & import("./entities/apostadorr.entity").Apostadorr & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, any, import("./entities/apostadorr.entity").Apostadorr> & import("./entities/apostadorr.entity").Apostadorr & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("./entities/apostadorr.entity").Apostadorr>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, any, import("./entities/apostadorr.entity").Apostadorr> & import("./entities/apostadorr.entity").Apostadorr & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateApostadorrDto: UpdateApostadorrDto): Promise<import("mongoose").Document<unknown, any, import("./entities/apostadorr.entity").Apostadorr> & import("./entities/apostadorr.entity").Apostadorr & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<string>;
}
