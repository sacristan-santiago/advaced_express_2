"use strict";

var _express = _interopRequireDefault(require("express"));

var _apifunction = require("./apifunction.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var api = new _apifunction.Apifunction();
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
app.get("/api/productos/listar", function (req, res) {
  res.json(api.listar());
});
app.get("/api/productos/listar/:id", function (req, res) {
  res.json(api.listarID(req));
});
app.post("/api/productos/guardar", function (req, res) {
  res.send(api.guardar(req));
});