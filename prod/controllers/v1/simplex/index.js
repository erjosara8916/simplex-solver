"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphicController = exports.SimplexController = void 0;
const express_1 = require("../../../POO/express");
const simplex_1 = require("./src/simplex");
const SimplexController = new express_1.Controller('/simplex');
exports.SimplexController = SimplexController;
SimplexController.addVerb(express_1.Verb.post, '', simplex_1.simplex);
const GraphicController = new express_1.Controller('/graphic');
exports.GraphicController = GraphicController;
GraphicController.addVerb(express_1.Verb.post, '', simplex_1.graphic);
//# sourceMappingURL=index.js.map