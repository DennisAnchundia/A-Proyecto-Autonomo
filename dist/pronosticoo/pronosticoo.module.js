"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PronosticooModule = void 0;
const common_1 = require("@nestjs/common");
const pronosticoo_service_1 = require("./pronosticoo.service");
const pronosticoo_controller_1 = require("./pronosticoo.controller");
const mongoose_1 = require("@nestjs/mongoose");
const pronosticoo_entity_1 = require("./entities/pronosticoo.entity");
let PronosticooModule = class PronosticooModule {
};
PronosticooModule = __decorate([
    (0, common_1.Module)({
        controllers: [pronosticoo_controller_1.PronosticooController],
        providers: [pronosticoo_service_1.PronosticooService],
        imports: [
            mongoose_1.MongooseModule.forFeature([{
                    name: pronosticoo_entity_1.Pronosticoo.name,
                    schema: pronosticoo_entity_1.PronosticooSchema
                }])
        ]
    })
], PronosticooModule);
exports.PronosticooModule = PronosticooModule;
//# sourceMappingURL=pronosticoo.module.js.map