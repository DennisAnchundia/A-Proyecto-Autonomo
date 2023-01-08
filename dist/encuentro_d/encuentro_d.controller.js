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
exports.EncuentroDController = void 0;
const common_1 = require("@nestjs/common");
const encuentro_d_dto_1 = require("./dto/encuentro_d.dto");
const encuentro_d_service_1 = require("./encuentro_d.service");
let EncuentroDController = class EncuentroDController {
    constructor(encuentroDService) {
        this.encuentroDService = encuentroDService;
    }
    async createPost(res, createEncuentroDTO) {
        const encuentro = await this.encuentroDService.createEncuentro(createEncuentroDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Se creó el encuentro deportivo",
            encuentro
        });
    }
    async getEncuentros(res) {
        const encuentros = await this.encuentroDService.getEncuentros;
        return res.status(common_1.HttpStatus.OK).json({
            encuentros
        });
    }
    async getEncuentro(res, encuentroID) {
        const encuentro = await this.encuentroDService.getEncuentro(encuentroID);
        if (!encuentro)
            throw new common_1.NotFoundException("No existe el encuentro deportivo");
        return res.status(common_1.HttpStatus.OK).json(encuentro);
    }
};
__decorate([
    (0, common_1.Post)("/create"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, encuentro_d_dto_1.CreateEncuentroDTO]),
    __metadata("design:returntype", Promise)
], EncuentroDController.prototype, "createPost", null);
__decorate([
    (0, common_1.Get)("/"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EncuentroDController.prototype, "getEncuentros", null);
__decorate([
    (0, common_1.Get)("/:encuentroID"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)("encuentroID")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], EncuentroDController.prototype, "getEncuentro", null);
EncuentroDController = __decorate([
    (0, common_1.Controller)('encuentro-d'),
    __metadata("design:paramtypes", [encuentro_d_service_1.EncuentroDService])
], EncuentroDController);
exports.EncuentroDController = EncuentroDController;
//# sourceMappingURL=encuentro_d.controller.js.map