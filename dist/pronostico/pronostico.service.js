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
exports.PronosticoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const pronostico_dto_1 = require("./dto/pronostico.dto");
let PronosticoService = class PronosticoService {
    constructor(pronosticoModel) {
        this.pronosticoModel = pronosticoModel;
    }
    async getPronosticos() {
        const pronostico = await this.pronosticoModel.find();
        return pronostico;
    }
    async getPronostico(pronosticoID) {
        const pronostico = await this.pronosticoModel.findById(pronosticoID);
        return pronostico;
    }
    async createPronostico(createPronosticoDTO) {
        const pronostico = new this.pronosticoModel(pronostico_dto_1.CreatePronosticoDTO);
        return await pronostico.save();
    }
    async updatePronostico(pronosticoID, createPronosticoDTO) {
        const updatePronostico = await this.pronosticoModel.findByIdAndUpdate(pronosticoID, createPronosticoDTO, { new: true });
        return updatePronostico;
    }
    async deletePronostico(pronosticoID) {
        const deletePronostico = await this.pronosticoModel.findByIdAndDelete(pronosticoID);
        return deletePronostico;
    }
};
PronosticoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)("Pronostico")),
    __metadata("design:paramtypes", [mongoose_1.Model])
], PronosticoService);
exports.PronosticoService = PronosticoService;
//# sourceMappingURL=pronostico.service.js.map