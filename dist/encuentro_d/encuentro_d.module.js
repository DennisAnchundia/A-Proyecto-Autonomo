"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncuentroDModule = void 0;
const common_1 = require("@nestjs/common");
const encuentro_d_controller_1 = require("./encuentro_d.controller");
const encuentro_d_service_1 = require("./encuentro_d.service");
const mongoose_1 = require("@nestjs/mongoose");
const encuentro_d_schema_1 = require("./schemas/encuentro_d.schema");
let EncuentroDModule = class EncuentroDModule {
};
EncuentroDModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: "Encuentro", schema: encuentro_d_schema_1.EncuentroSchema }
            ])
        ],
        controllers: [encuentro_d_controller_1.EncuentroDController],
        providers: [encuentro_d_service_1.EncuentroDService]
    })
], EncuentroDModule);
exports.EncuentroDModule = EncuentroDModule;
//# sourceMappingURL=encuentro_d.module.js.map