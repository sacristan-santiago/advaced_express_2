import express from "express";
import {Producto} from "../classes/producto";

let producto = new Producto;

const router = express.Router();

router.get("/listar", (req, res ) => {
    res.json(producto.listar());
})

router.get("/listar/:id", (req, res ) => {
    res.json(producto.listarID(req));
})

router.post("/guardar", (req, res ) => {
    res.send(producto.guardar(req));
})
//para probar el metodo guardar pasar en POST el siguiente elemento como raw/json: 
//{"title":"sacapuntas","price":150,"thumbnail":"https://www.shutterstock.com/es/image-vector/pencil-sharpener-vector-design-illustration-isolated-1417489541"}

router.put("/actualizar/:id", (req, res ) => {
    res.json(producto.actualizar(req));
})

router.delete("/borrar/:id", (req, res ) => {
    res.json(producto.borrar(req));
})


export default router;