vistaPrincipal = (req, res) => {
  res.render("inicio");
};
vistaTabProductos = (req, res) => {
  res.render("TabProductos");
};
vistaTabCategorias = (req, res) => {
  res.render("TabCategorias");
};
vistaTabUsuarios = (req, res) => {
  res.render("TabUsuarios");
};

module.exports = {
  vistaPrincipal,
  vistaTabCategorias,
  vistaTabProductos,
  vistaTabUsuarios,
};
