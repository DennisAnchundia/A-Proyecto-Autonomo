"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApostadorrModule = void 0;
const common_1 = require("@nestjs/common");
const apostadorr_service_1 = require("./apostadorr.service");
const apostadorr_controller_1 = require("./apostadorr.controller");
const mongoose_1 = require("@nestjs/mongoose");
const apostadorr_entity_1 = require("./entities/apostadorr.entity");
let ApostadorrModule = class ApostadorrModule {
};
ApostadorrModule = __decorate([
    (0, common_1.Module)({
        controllers: [apostadorr_controller_1.ApostadorrController],
        providers: [apostadorr_service_1.ApostadorrService],
        imports: [mongoose_1.MongooseModule.forFeature([{
                    name: apostadorr_entity_1.Apostadorr.name,
                    schema: apostadorr_entity_1.ApostadorSchema
                }])]
    })
], ApostadorrModule);
exports.ApostadorrModule = ApostadorrModule;
//# sourceMappingURL=apostadorr.module.js.map