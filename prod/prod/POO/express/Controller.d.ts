export var __esModule: boolean;
declare var _default: typeof Controller;
export default _default;
declare class Controller {
    constructor(path: any);
    router: import("express-serve-static-core").Router;
    path: any;
    /**
     * addVerb
     */
    addVerb(method: any, path: any, ...action: any[]): void;
    addController(controller: any): void;
}
