import  { ExpressConfig }  from "../POO/express";

const configExpress:ExpressConfig ={
    port: 5000,
    environment: process.env.ENVIRONMENT || "dev"
}


export {configExpress}