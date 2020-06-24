"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config_1 = require("./config/config");
const express_1 = require("./POO/express/");
const index_1 = require("./controllers/index");
const app = new express_1.AppExpress(config_1.configExpress, index_1.Server);
app.initializateControllers();
app.listen();
//# sourceMappingURL=server.js.map