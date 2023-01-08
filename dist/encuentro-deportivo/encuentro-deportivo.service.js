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
exports.EncuentroDeportivoService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const encuentro_deportivo_entity_1 = require("./entities/encuentro-deportivo.entity");
let EncuentroDeportivoService = class EncuentroDeportivoService {
    constructor(EcnutrnodeportivoSchema) {
        this.EcnutrnodeportivoSchema = EcnutrnodeportivoSchema;
    }
    async create(createEncuentroDeportivoDto) {
        const Ecnuntro = await this.EcnutrnodeportivoSchema.create(createEncuentroDeportivoDto);
        return Ecnuntro;
    }
    findAll() {
        return this.EcnutrnodeportivoSchema.find();
    }
    async findOne(id) {
        const Ecnuntro = await this.EcnutrnodeportivoSchema.findById(id);
        return Ecnuntro;
    }
    async update(id, updateEncuentroDeportivoDto) {
        const Ecnuntro = await this.EcnutrnodeportivoSchema.findById(id);
        await Ecnuntro.updateOne(updateEncuentroDeportivoDto);
        return Ecnuntro;
    }
    async remove(id) {
        const Ecnuntro = await this.EcnutrnodeportivoSchema.findById(id);
        await Ecnuntro.deleteOne();
        return 'eliminado';
    }
};
EncuentroDeportivoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(encuentro_deportivo_entity_1.EncuentroDeportivo.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], EncuentroDeportivoService);
exports.EncuentroDeportivoService = EncuentroDeportivoService;
//# sourceMappingURL=encuentro-deportivo.service.js.map