import "dotenv/config"
import {configExpress } from "./config/config"
import { AppExpress } from "./POO/express/";
import path from "path";
import express from "express";
import { Server } from "./controllers/index";

const app = new AppExpress(configExpress, Server)
app.addMiddleware(express.static(path.join(__dirname, 'public')))
app.initializateControllers()
app.listen()