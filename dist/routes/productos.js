"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _producto = require("../classes/producto");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var producto = new _producto.Producto();

var router = _express["default"].Router();

router.get("/listar", function (req, res) {
  res.json(producto.listar());
});
router.get("/listar/:id", function (req, res) {
  res.json(producto.listarID(req));
});
router.post("/guardar", function (req, res) {
  res.send(producto.guardar(req));
}); //para probar el metodo guardar pasar en POST el siguiente elemento como raw/json: 
//{"title":"sacapuntas","price":150,"thumbnail":"https://www.shutterstock.com/es/image-vector/pencil-sharpener-vector-design-illustration-isolated-1417489541"}

router.put("/actualizar/:id", function (req, res) {
  res.json(producto.actualizar(req));
});
router["delete"]("/borrar/:id", function (req, res) {
  res.json(producto.borrar(req));
});
var _default = router;
exports["default"] = _default;