import  { ExpressConfig }  from "../POO/express";

const configExpress:ExpressConfig ={
    port: 80,
    environment: process.env.ENVIRONMENT || "dev"
}


export {configExpress}