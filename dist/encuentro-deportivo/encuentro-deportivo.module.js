"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncuentroDeportivoModule = void 0;
const common_1 = require("@nestjs/common");
const encuentro_deportivo_service_1 = require("./encuentro-deportivo.service");
const encuentro_deportivo_controller_1 = require("./encuentro-deportivo.controller");
const mongoose_1 = require("@nestjs/mongoose");
const encuentro_deportivo_entity_1 = require("./entities/encuentro-deportivo.entity");
let EncuentroDeportivoModule = class EncuentroDeportivoModule {
};
EncuentroDeportivoModule = __decorate([
    (0, common_1.Module)({
        controllers: [encuentro_deportivo_controller_1.EncuentroDeportivoController],
        providers: [encuentro_deportivo_service_1.EncuentroDeportivoService],
        imports: [
            mongoose_1.MongooseModule.forFeature([{
                    name: encuentro_deportivo_entity_1.EncuentroDeportivo.name,
                    schema: encuentro_deportivo_entity_1.EncuentroDeportivoSchema
                }])
        ]
    })
], EncuentroDeportivoModule);
exports.EncuentroDeportivoModule = EncuentroDeportivoModule;
//# sourceMappingURL=encuentro-deportivo.module.js.map