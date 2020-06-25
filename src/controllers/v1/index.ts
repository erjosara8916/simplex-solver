import {SimplexController, GraphicController} from "./simplex/index";
import { Controller } from "../../POO/express";
const v1 = new Controller("/v1")
v1.addController(SimplexController)
v1.addController(GraphicController)
export default v1