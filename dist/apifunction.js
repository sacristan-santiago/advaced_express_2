"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Apifunction = void 0;

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

var Apifunction = /*#__PURE__*/function () {
  function Apifunction(title, price, thumbnail, id) {
    _classCallCheck(this, Apifunction);

    this.title = title;
    this.price = price;
    this.thumbnail = thumbnail;
    this.id = id;
  }

  _createClass(Apifunction, [{
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
      var producto = req.body;
      productos.push(producto);
      var len = productos.length;
      productos[len - 1].id = len;
      console.log(productos);
      return "recibido";
    }
  }]);

  return Apifunction;
}();

exports.Apifunction = Apifunction;