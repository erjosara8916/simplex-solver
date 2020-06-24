import IController from "./controller.interface";
import { Router } from "express";
import Verb from "./verb.enum";
declare class Controller implements IController {
    path: string;
    router: Router;
    constructor(path: string);
    /**
     * addVerb
     */
    addVerb(method: Verb, path: string, ...action: any): void;
    addController(controller: Controller): void;
}
export default Controller;
