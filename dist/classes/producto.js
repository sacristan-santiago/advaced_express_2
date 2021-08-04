"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Producto = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var productos = [{
  title: "lapicera",
  price: 50,
  thumbnail: "https://www.shutterstock.com/es/image-photo/stylish-pens-on-white-background-1318264151",
  id: 1
}, {
  title: "goma de borrar",
  price: 85,
  thumbnail: "https://www.shutterstock.com/es/image-photo/rubber-eraser-pencil-ink-pen-isolated-656520052",
  id: 2
}, {
  title: "papel",
  price: 200,
  thumbnail: "https://www.shutterstock.com/es/image-photo/top-shot-macro-paper-roll-swirl-324939554",
  id: 3
}]; //Uncommentar debajo para probar else en listar()
// productos = [];

var Producto = /*#__PURE__*/function () {
  function Producto(title, price, thumbnail, id) {
    _classCallCheck(this, Producto);

    this.title = title;
    this.price = price;
    this.thumbnail = thumbnail;
    this.id = id;
  }

  _createClass(Producto, [{
    key: "listar",
    value: function listar() {
      if (productos[0] != null) {
        return productos;
      } else {
        //para probar else descomentar arriba
        return {
          error: "no hay productos cargados"
        };
      }
    }
  }, {
    key: "listarID",
    value: function listarID(req) {
      var productoID = req.params.id;

      if (productos[productoID - 1] != null) {
        return productos[productoID - 1];
      } else {
        return {
          error: "producto no encontrado"
        };
      }
    }
  }, {
    key: "guardar",
    value: function guardar(req, res) {
      var producto = new Producto(req.body.title, req.body.price, req.body.thumbnail);
      productos.push(producto);
      var len = productos.length;
      productos[len - 1].id = len;
      console.log(productos);
      return "producto guardado";
    }
  }, {
    key: "actualizar",
    value: function actualizar(req, res) {
      var productoID = parseInt(req.params.id);
      var body = req.body;
      var producto = new Producto(body.title, body.price, body.thumbnail, productoID);
      productos[productoID - 1] = producto;
      return productos;
    }
  }, {
    key: "borrar",
    value: function borrar(req, res) {
      var productoID = parseInt(req.params.id);
      var producto = new Producto(undefined, undefined, undefined, productoID);
      var productoEliminado = productos[productoID - 1];
      productos[productoID - 1] = producto;
      return productoEliminado;
    }
  }]);

  return Producto;
}();

exports.Producto = Producto;