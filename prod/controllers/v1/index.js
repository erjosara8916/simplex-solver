"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./simplex/index"));
const express_1 = require("../../POO/express");
const v1 = new express_1.Controller("/v1");
v1.addController(index_1.default);
exports.default = v1;
//# sourceMappingURL=index.js.map