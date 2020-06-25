import { Controller, Verb } from "../../../POO/express";
import { simplex, graphic } from "./src/simplex";

const SimplexController = new Controller('/simplex');
SimplexController.addVerb(Verb.post, '', simplex)
const GraphicController = new Controller('/graphic');
GraphicController.addVerb(Verb.post, '', graphic)
export { SimplexController, GraphicController }