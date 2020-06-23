import "dotenv/config"
import {configExpress } from "./config/config"
import { AppExpress } from "./POO/express/";

import { Server } from "./controllers/index";

const app = new AppExpress(configExpress, Server)
app.initializateControllers()
app.listen()