let productos = [
    {
        title: "lapicera",
        price: 50,
        thumbnail: "https://www.shutterstock.com/es/image-photo/stylish-pens-on-white-background-1318264151",
        id: 1
    },
    {
        title: "goma de borrar",
        price: 85,
        thumbnail: "https://www.shutterstock.com/es/image-photo/rubber-eraser-pencil-ink-pen-isolated-656520052",
        id: 2
    },
    {
        title: "papel",
        price: 200,
        thumbnail: "https://www.shutterstock.com/es/image-photo/top-shot-macro-paper-roll-swirl-324939554",
        id: 3
    }
]

//Uncommentar debajo para probar else en listar()
// productos = [];

export class Producto {
    constructor (title, price, thumbnail, id) {
        this.title = title;
        this.price = price;
        this.thumbnail = thumbnail;
        this.id = id;
    }

    listar() {
        if (productos[0] != null) {
            return productos;
        } else {
            //para probar else descomentar arriba
            return {error: "no hay productos cargados"}
        }
    }

    listarID(req) {
        const productoID = req.params.id;
        if (productos[productoID-1] != null) {
            return productos[productoID-1]
        } else {
            return {error: "producto no encontrado"}
        }
        
    }
    guardar (req, res) {
        const producto = new Producto(req.body.title, req.body.price, req.body.thumbnail)
        productos.push(producto);
        const len = productos.length
        productos[len-1].id = len
        console.log(productos);
        return "producto guardado";
    }
    actualizar(req, res) {
        const productoID = parseInt(req.params.id);
        const body = req.body;
        const producto = new Producto(body.title, body.price, body.thumbnail, productoID);
        productos[productoID-1] = producto;
        return productos;
    }
    borrar (req, res) {
        const productoID = parseInt(req.params.id);
        const producto = new Producto(undefined, undefined, undefined, productoID);
        const productoEliminado = productos[productoID-1];
        productos[productoID-1] = producto;
        return productoEliminado;
    }
}

