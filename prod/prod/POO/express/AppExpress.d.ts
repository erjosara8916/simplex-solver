export var __esModule: boolean;
declare var _default: typeof AppExpress;
export default _default;
declare class AppExpress {
    constructor(config: any, constrollers: any);
    app: any;
    config: any;
    controllers: any;
    addMiddleware(middleware: any): void;
    initializateMiddlewares(): void;
    initializateControllers(): void;
    listen(): void;
}
