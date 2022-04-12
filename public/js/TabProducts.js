$(document).ready(function () {
  $("#TabProductos").DataTable({
    paging: true,
    pageLength: 10,
    processing: true,
    serverSide: true,
    ajax: {
      data: "json",
      type: "GET",
      url: "http://localhost:3000/productos",
    },
    columns: [
      { data: "ID_producto" },
      { data: "ID_Categorias" },
      { data: "Nombre" },
      { data: "Marca" },
      { data: "Precio" },
      { data: "Descripcion" },
      { data: "InVentario" },
      { data: "ImagenesURL" },
    ],
  });
});
