"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class AppExpress {
    constructor(config, constrollers) {
        this.app = express_1.default();
        this.config = config;
        this.controllers = constrollers;
        this.initializateMiddlewares();
    }
    addMiddleware(middleware) {
        this.app.use(middleware);
    }
    initializateMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use(cors_1.default());
        if (this.config.environment === "dev")
            this.app.use(morgan_1.default("dev"));
    }
    initializateControllers() {
        this.app.use(this.controllers.path, this.controllers.router);
    }
    listen() {
        this.app.listen(this.config.port, () => {
            console.log(`App listening on the port ${this.config.port}`);
        });
    }
}
exports.default = AppExpress;
//# sourceMappingURL=AppExpress.js.map