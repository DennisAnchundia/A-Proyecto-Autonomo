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
exports.EncuentroDeportivoController = void 0;
const common_1 = require("@nestjs/common");
const encuentro_deportivo_service_1 = require("./encuentro-deportivo.service");
const create_encuentro_deportivo_dto_1 = require("./dto/create-encuentro-deportivo.dto");
const update_encuentro_deportivo_dto_1 = require("./dto/update-encuentro-deportivo.dto");
let EncuentroDeportivoController = class EncuentroDeportivoController {
    constructor(encuentroDeportivoService) {
        this.encuentroDeportivoService = encuentroDeportivoService;
    }
    create(createEncuentroDeportivoDto) {
        return this.encuentroDeportivoService.create(createEncuentroDeportivoDto);
    }
    findAll() {
        return this.encuentroDeportivoService.findAll();
    }
    findOne(id) {
        return this.encuentroDeportivoService.findOne(id);
    }
    update(id, updateEncuentroDeportivoDto) {
        return this.encuentroDeportivoService.update(id, updateEncuentroDeportivoDto);
    }
    remove(id) {
        return this.encuentroDeportivoService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_encuentro_deportivo_dto_1.CreateEncuentroDeportivoDto]),
    __metadata("design:returntype", void 0)
], EncuentroDeportivoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EncuentroDeportivoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EncuentroDeportivoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_encuentro_deportivo_dto_1.UpdateEncuentroDeportivoDto]),
    __metadata("design:returntype", void 0)
], EncuentroDeportivoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EncuentroDeportivoController.prototype, "remove", null);
EncuentroDeportivoController = __decorate([
    (0, common_1.Controller)('encuentro-deportivo'),
    __metadata("design:paramtypes", [encuentro_deportivo_service_1.EncuentroDeportivoService])
], EncuentroDeportivoController);
exports.EncuentroDeportivoController = EncuentroDeportivoController;
//# sourceMappingURL=encuentro-deportivo.controller.js.map