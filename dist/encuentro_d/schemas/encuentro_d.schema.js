"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncuentroSchema = void 0;
const mongoose_1 = require("mongoose");
exports.EncuentroSchema = new mongoose_1.Schema({
    nombre: String,
    nombre_Eq1: String,
    nombre_Eq2: String,
    fecha: String,
    hora: String
});
//# sourceMappingURL=encuentro_d.schema.js.map