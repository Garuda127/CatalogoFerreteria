vistaPrincipal = (req, res) => {
  res.render("inicio", { extractScripts: true });
};
vistaTabProductos = (req, res) => {
  res.render("TabProductos", { extractScripts: true });
};
vistaTabCategorias = (req, res) => {
  res.render("TabCategorias", { extractScripts: true });
};
vistaTabUsuarios = (req, res) => {
  res.render("TabUsuarios", { extractScripts: true });
};
vistaAddProducto = (req, res) => {
  res.render("AddProductos", { extractScripts: true });
};
vistaAddCategoria = (req, res) => {
  res.render("AddCategoria", { extractScripts: true });
};
vistaEditProducto = (req, res) => {
  console.log(req.params);
  res.render("editProductos", { extractScripts: true, id: req.params.id });
};
vistaEditCategoria = (req, res) => {
  console.log(req.params);
  res.render("editCategoria", { extractScripts: true, id: req.params.id });
};

module.exports = {
  vistaPrincipal,
  vistaTabCategorias,
  vistaTabProductos,
  vistaTabUsuarios,
  vistaAddProducto,
  vistaAddCategoria,
  vistaEditProducto,
  vistaEditCategoria,
};
