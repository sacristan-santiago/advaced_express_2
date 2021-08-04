"use strict";

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _productos = _interopRequireDefault(require("./routes/productos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
var puerto = 8080;
var server = app.listen(puerto, function () {
  console.log("Server levantado en puerto", puerto);
});
server.on("error", function (err) {
  console.log("Error=>", err);
});
app.use("/api/productos", _productos["default"]); //disponibilizando formulario publico en: http://localhost:8080/public/index.html

var publicPath = _path["default"].resolve(__dirname, "../public");

app.use("/public", _express["default"]["static"](publicPath));