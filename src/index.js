import express from "express";
import path from "path";
import productosRouter from "./routes/productos.js"


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

app.use("/api/productos", productosRouter);

//disponibilizando formulario publico en: http://localhost:8080/public/index.html
const publicPath = path.resolve(__dirname, "../public");
app.use("/public", express.static(publicPath));
