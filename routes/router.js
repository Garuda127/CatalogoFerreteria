const express = require("express");
const {
  vistaPrincipal,
  vistaTabProductos,
  vistaTabCategorias,
  vistaTabUsuarios,
  vistaAddProducto,
} = require("../controllers/PageControllers");
const router = express.Router();
router.get("/admin", vistaPrincipal);
router.get("/admin/productos", vistaTabProductos);
router.get("/admin/categorias", vistaTabCategorias);
router.get("/admin/usuarios", vistaTabUsuarios);
router.get("/admin/addProductos", vistaAddProducto);
module.exports = { routes: router };
