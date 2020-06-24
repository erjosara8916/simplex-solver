"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = require("../POO/express");
const v1_1 = __importDefault(require("./v1"));
const Server = new express_1.Controller("/");
exports.Server = Server;
Server.addVerb(express_1.Verb.get, "/test", (req, res) => {
    return res.send("testing get message");
});
Server.addVerb(express_1.Verb.get, "/", (req, res) => {
    return res.send("default response");
});
const RestApi = new express_1.Controller("/api");
RestApi.addController(v1_1.default);
Server.addController(RestApi);
//# sourceMappingURL=index.js.map