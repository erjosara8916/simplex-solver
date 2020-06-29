"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class Controller {
    constructor(path) {
        this.router = express_1.Router();
        this.path = path;
    }
    /**
     * addVerb
     */
    addVerb(method, path, ...action) {
        this.router[method](path, ...action);
    }
    addController(controller) {
        this.router.use(controller.path, controller.router);
    }
}
exports.default = Controller;
//# sourceMappingURL=Controller.js.map