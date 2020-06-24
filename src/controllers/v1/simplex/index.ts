import { Controller, Verb } from "../../../POO/express";
import { simplex } from "./src/simplex";

const SimplexController = new Controller('/simplex');
SimplexController.addVerb(Verb.post, '', simplex)

export default SimplexController