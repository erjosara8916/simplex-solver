import  { ExpressConfig }  from "../POO/express";

const configExpress:ExpressConfig ={
    port: process.env.PORT || 80,
    environment: process.env.ENVIRONMENT || "dev"
}


export {configExpress}