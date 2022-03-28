const express = require("express");
const mysql = require("mysql");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());

//MYsql
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "toor",
  database: "ferre",
});

//Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
}); //Home
app.use(express.static("public")); //Static files

//obtener productos cards
app.get("/cards", (req, res) => {
  connection.query("SELECT p.Nombre,p.Marca,p.Precio,i.ImagenesUrl FROM productos p JOIN imagenes i WHERE p.ID_producto = i.productos_ID_producto", (err, rows, fields) => {
    if (err) {
      console.log(err);
    } 
    if (rows.length > 0) {
     res.json(rows);
    } else {
      res.send("No hay productos");
    }
  });
});
// all productos
app.get("/productos", (req, res) => {
  connection.query("SELECT * FROM productos", (err, results) => {
    if (err) {
      console.log("Error en la consulta");
    }
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send("No hay productos");
    }
  });
  connection.end();
});
//productos por id
app.get("/productos/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM productos WHERE ID_producto = ${id}`;
  connection.query(sql, (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      res.json(results);
    } else {
      res.send("No hay productos");
    }
  });
});
//agregar productos
app.post("/add", (req, res) => {
  const sql = `INSERT INTO productos SET ?`;
  const productoOBJ = {
    ID_producto: req.body.ID_producto,
    ID_Categorias: req.body.ID_Categorias,
    Nombre: req.body.Nombre,
    Marca: req.body.Marca,
    Precio: req.body.Precio,
    Descripcion: req.body.Descripcion,
    InVentario: req.body.InVentario,
  };
  connection.query(sql, productoOBJ, (err, results) => {
    if (err) throw err;
    res.send("Producto agregado");
  });
});
//actualizar productos
app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const {
    ID_producto,
    ID_Categorias,
    Nombre,
    Marca,
    Precio,
    Descripcion,
    InVentario,
  } = req.body;
  const sql = `UPDATE productos SET ? WHERE ID_producto = ${id}`;
  const productoOBJ = {
    ID_producto,
    ID_Categorias,
    Nombre,
    Marca,
    Precio,
    Descripcion,
    InVentario,
  };
  connection.query(sql, productoOBJ, (err, results) => {
    if (err) throw err;
    res.send("Producto actualizado");
  });
});
//eliminar productos
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM productos WHERE ID_producto = ${id}`;
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send("Producto eliminado");
  });
});

//check connection
connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
});
//app listen
app.listen(port, () => console.log(`localhost:${port}!`));

//""
