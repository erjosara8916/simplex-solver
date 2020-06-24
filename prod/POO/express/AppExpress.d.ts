import express from "express";
import ExpressConfig from "./expressConfig.interface";
import Controller from "./Controller";
declare class AppExpress {
    app: express.Application;
    config: ExpressConfig;
    private controllers;
    constructor(config: ExpressConfig, constrollers: Controller);
    addMiddleware(middleware: any): void;
    private initializateMiddlewares;
    initializateControllers(): void;
    listen(): void;
}
export default AppExpress;
