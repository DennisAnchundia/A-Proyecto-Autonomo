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
exports.ApostadorService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let ApostadorService = class ApostadorService {
    constructor(apostadorModel) {
        this.apostadorModel = apostadorModel;
    }
    async getApostadores() {
        const apostadores = await this.apostadorModel.find();
        return apostadores;
    }
    async getApostador(apostadorID) {
        let apostador;
        if (!apostador) {
            apostador = await this.apostadorModel.findById(apostadorID);
        }
        return apostador;
    }
    async createApostador(createApostadorDTO) {
        const apostador = new this.apostadorModel(createApostadorDTO);
        return await apostador.save();
    }
    async updateApostador(apostadorID, createApostadorDTO) {
        const updatedApostador = await this.apostadorModel.findByIdAndUpdate(apostadorID, createApostadorDTO, { new: true });
        return updatedApostador;
    }
    async deleteApostador(apostadorID) {
        const deletedApostador = await this.apostadorModel.findByIdAndDelete(apostadorID);
        return deletedApostador;
    }
};
ApostadorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Apostador')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], ApostadorService);
exports.ApostadorService = ApostadorService;
//# sourceMappingURL=apostador.service.js.map