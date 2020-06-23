import SimplexController from "./simplex/index";
import { Controller } from "../../POO/express";
const v1 = new Controller("/v1")
v1.addController(SimplexController)

export default v1