import express from "express";
import {Apifunction} from "./apifunction.js"

let api = new Apifunction;

const app = express ();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const puerto = 8080; 

const server = app.listen(puerto, () => {
    console.log("Server levantado en puerto", puerto)
})

server.on("error", (err)=> {
    console.log("Error=>", err)
})

app.get("/api/productos/listar", (req, res ) => {
    res.json(api.listar());
})

app.get("/api/productos/listar/:id", (req, res ) => {
    res.json(api.listarID(req));
})

app.post("/api/productos/guardar", (req, res ) => {
    res.send(api.guardar(req));
})