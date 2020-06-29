"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config_1 = require("./config/config");
const express_1 = require("./POO/express/");
const path_1 = __importDefault(require("path"));
const express_2 = __importDefault(require("express"));
const index_1 = require("./controllers/index");
const app = new express_1.AppExpress(config_1.configExpress, index_1.Server);
app.addMiddleware(express_2.default.static(path_1.default.join(__dirname, 'public')));
app.initializateControllers();
app.listen();
//# sourceMappingURL=server.js.map