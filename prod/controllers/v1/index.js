"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./simplex/index");
const express_1 = require("../../POO/express");
const v1 = new express_1.Controller("/v1");
v1.addController(index_1.SimplexController);
v1.addController(index_1.GraphicController);
exports.default = v1;
//# sourceMappingURL=index.js.map