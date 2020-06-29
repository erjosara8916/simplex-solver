"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("../../../POO/express");
const simplex_1 = require("./src/simplex");
const SimplexController = new express_1.Controller('/simplex');
SimplexController.addVerb(express_1.Verb.post, '', simplex_1.simplex);
exports.default = SimplexController;
//# sourceMappingURL=index.js.map