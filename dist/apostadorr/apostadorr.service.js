"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApostadorrService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const apostadorr_entity_1 = require("./entities/apostadorr.entity");
let ApostadorrService = class ApostadorrService {
    constructor(ApostadorSchema) {
        this.ApostadorSchema = ApostadorSchema;
    }
    async create(createApostadorrDto) {
        const apostador = await this.ApostadorSchema.create(createApostadorrDto);
        return apostador;
    }
    findAll() {
        return this.ApostadorSchema.find();
    }
    async findOne(id) {
        const apostador = await this.ApostadorSchema.findById(id);
        return apostador;
    }
    async update(id, updateApostadorrDto) {
        const apostador = await this.ApostadorSchema.findById(id);
        await apostador.updateOne(updateApostadorrDto);
        return apostador;
    }
    async remove(id) {
        const apostador = await this.ApostadorSchema.findById(id);
        await apostador.deleteOne();
        return 'eliminado';
    }
};
ApostadorrService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(apostadorr_entity_1.Apostadorr.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ApostadorrService);
exports.ApostadorrService = ApostadorrService;
//# sourceMappingURL=apostadorr.service.js.map