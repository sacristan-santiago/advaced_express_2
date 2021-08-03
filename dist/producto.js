"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Producto = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Producto = /*#__PURE__*/function () {
  function Producto() {
    _classCallCheck(this, Producto);
  }

  _createClass(Producto, [{
    key: "listar",
    value: function listar(productos) {
      return res.json(productos);
    }
  }, {
    key: "funciona",
    value: function funciona() {
      console.log("esta funcionando");
    }
  }]);

  return Producto;
}();

exports.Producto = Producto;