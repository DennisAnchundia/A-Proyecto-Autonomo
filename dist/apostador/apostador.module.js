"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApostadorModule = void 0;
const common_1 = require("@nestjs/common");
const apostador_controller_1 = require("./apostador.controller");
const apostador_service_1 = require("./apostador.service");
const mongoose_1 = require("@nestjs/mongoose");
const apostador_schema_1 = require("./schemas/apostador.schema");
let ApostadorModule = class ApostadorModule {
};
ApostadorModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: "Apostador", schema: apostador_schema_1.ApostadorSchema }
            ])
        ],
        controllers: [apostador_controller_1.ApostadorController],
        providers: [apostador_service_1.ApostadorService]
    })
], ApostadorModule);
exports.ApostadorModule = ApostadorModule;
//# sourceMappingURL=apostador.module.js.map