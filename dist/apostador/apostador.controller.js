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
exports.ApostadorController = void 0;
const common_1 = require("@nestjs/common");
const apostador_dto_1 = require("./dto/apostador.dto");
const apostador_service_1 = require("./apostador.service");
let ApostadorController = class ApostadorController {
    constructor(apostadorService) {
        this.apostadorService = apostadorService;
    }
    async createPost(res, createApostadorDTO) {
        const apostador = await this.apostadorService.createApostador(createApostadorDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Los datos del Apostador han sido creados ",
            apostador
        });
    }
    async getApostadores(res) {
        const apostadores = await this.apostadorService.getApostadores();
        return res.status(common_1.HttpStatus.OK).json({
            apostadores
        });
    }
    async getApostador(apostadorID) {
        return this.apostadorService.getApostador(apostadorID);
    }
};
__decorate([
    (0, common_1.Post)("/create"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, apostador_dto_1.CreateApostadorDTO]),
    __metadata("design:returntype", Promise)
], ApostadorController.prototype, "createPost", null);
__decorate([
    (0, common_1.Get)("/"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ApostadorController.prototype, "getApostadores", null);
__decorate([
    (0, common_1.Get)("/:apsotadorID"),
    __param(0, (0, common_1.Param)('apostadorID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ApostadorController.prototype, "getApostador", null);
ApostadorController = __decorate([
    (0, common_1.Controller)('apostador'),
    __metadata("design:paramtypes", [apostador_service_1.ApostadorService])
], ApostadorController);
exports.ApostadorController = ApostadorController;
//# sourceMappingURL=apostador.controller.js.map