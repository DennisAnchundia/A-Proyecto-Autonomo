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
exports.PronosticooController = void 0;
const common_1 = require("@nestjs/common");
const pronosticoo_service_1 = require("./pronosticoo.service");
const create_pronosticoo_dto_1 = require("./dto/create-pronosticoo.dto");
const update_pronosticoo_dto_1 = require("./dto/update-pronosticoo.dto");
let PronosticooController = class PronosticooController {
    constructor(pronosticooService) {
        this.pronosticooService = pronosticooService;
    }
    create(createPronosticooDto) {
        return this.pronosticooService.create(createPronosticooDto);
    }
    findAll() {
        return this.pronosticooService.findAll();
    }
    findOne(id) {
        return this.pronosticooService.findOne(id);
    }
    update(id, updatePronosticooDto) {
        return this.pronosticooService.update(id, updatePronosticooDto);
    }
    remove(id) {
        return this.pronosticooService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_pronosticoo_dto_1.CreatePronosticooDto]),
    __metadata("design:returntype", void 0)
], PronosticooController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PronosticooController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PronosticooController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_pronosticoo_dto_1.UpdatePronosticooDto]),
    __metadata("design:returntype", void 0)
], PronosticooController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PronosticooController.prototype, "remove", null);
PronosticooController = __decorate([
    (0, common_1.Controller)('pronosticoo'),
    __metadata("design:paramtypes", [pronosticoo_service_1.PronosticooService])
], PronosticooController);
exports.PronosticooController = PronosticooController;
//# sourceMappingURL=pronosticoo.controller.js.map