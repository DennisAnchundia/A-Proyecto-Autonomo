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
exports.ApostadorrController = void 0;
const common_1 = require("@nestjs/common");
const apostadorr_service_1 = require("./apostadorr.service");
const create_apostadorr_dto_1 = require("./dto/create-apostadorr.dto");
const update_apostadorr_dto_1 = require("./dto/update-apostadorr.dto");
let ApostadorrController = class ApostadorrController {
    constructor(apostadorrService) {
        this.apostadorrService = apostadorrService;
    }
    create(createApostadorrDto) {
        return this.apostadorrService.create(createApostadorrDto);
    }
    findAll() {
        return this.apostadorrService.findAll();
    }
    findOne(id) {
        return this.apostadorrService.findOne(id);
    }
    update(id, updateApostadorrDto) {
        return this.apostadorrService.update(id, updateApostadorrDto);
    }
    remove(id) {
        return this.apostadorrService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_apostadorr_dto_1.CreateApostadorrDto]),
    __metadata("design:returntype", void 0)
], ApostadorrController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ApostadorrController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApostadorrController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_apostadorr_dto_1.UpdateApostadorrDto]),
    __metadata("design:returntype", void 0)
], ApostadorrController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApostadorrController.prototype, "remove", null);
ApostadorrController = __decorate([
    (0, common_1.Controller)('apostadorr'),
    __metadata("design:paramtypes", [apostadorr_service_1.ApostadorrService])
], ApostadorrController);
exports.ApostadorrController = ApostadorrController;
//# sourceMappingURL=apostadorr.controller.js.map