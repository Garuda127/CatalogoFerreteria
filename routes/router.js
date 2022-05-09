const express = require("express");
const {
  vistaPrincipal,
  vistaTabProductos,
  vistaTabCategorias,
  vistaTabUsuarios,
  vistaAddProducto,
  vistaAddCategoria,
  vistaEditProducto,
  vistaEditCategoria,
} = require("../controllers/PageControllers");
const router = express.Router();
router.get("/admin", vistaPrincipal);
router.get("/admin/productos", vistaTabProductos);
router.get("/admin/categorias", vistaTabCategorias);
router.get("/admin/usuarios", vistaTabUsuarios);
router.get("/admin/addProductos", vistaAddProducto);
router.get("/admin/addCategorias", vistaAddCategoria);
router.get("/admin/editProductos/:id", vistaEditProducto);
router.get("/admin/editCategorias/:id", vistaEditCategoria);
module.exports = { routes: router };
