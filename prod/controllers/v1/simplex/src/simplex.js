"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphic = exports.simplex = void 0;
const scraper_1 = __importDefault(require("./scraper"));
const graphic_1 = __importDefault(require("./graphic"));
async function simplex(req, res) {
    const { url } = req.body;
    const answer = await scraper_1.default(url);
    return res.json({ answer });
}
exports.simplex = simplex;
async function graphic(req, res) {
    const { url } = req.body;
    const answer = await graphic_1.default(url);
    return res.json({ answer });
}
exports.graphic = graphic;
//# sourceMappingURL=simplex.js.map