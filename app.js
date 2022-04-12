const express = require("express");
const mysql = require("mysql");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");
app.use(bodyParser.json());

//ejs
app.set("view engine", "ejs");
app.use(expressLayouts);

//MYsql
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "toor",
  database: "ferre",
});
//utilidades
const router = require("./routes/router");
app.use(router.routes);
//Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
}); //Home
app.use(express.static("public")); //Static files

//obtener productos cards
app.get("/cards", (req, res) => {
  connection.query(
    "SELECT Nombre, ImagenesURL FROM productos ",
    (err, rows, fields) => {
      if (err) {
        console.log(err);
      }
      if (rows.length > 0) {
        res.json(rows);
      } else {
        res.send("No hay productos");
      }
    }
  );
});
// all productos
app.get("/productos", (req, res) => {
  connection.query("SELECT * FROM productos", (err, results) => {
    if (err) {
      console.log(err);
      throw err;
    }
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send("No hay productos");
    }
  });
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

//check connection
connection.connect((err) => {
  if (err) throw err;
  console.log("connected");
});
//app listen
app.listen(port, () => console.log(`localhost:${port}!`));

//jwt
const jwt = require("jsonwebtoken");
const keys = require("./settings/keys");
app.set("key", keys.key);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {});

app.post("/login", (req, res) => {
  const { username, password, admin } = req.body;
  if (username === "admin" && password === "admin" && admin === true) {
    const token = jwt.sign({ username }, app.get("key"), {
      expiresIn: "1h",
    });
    res.json({
      token,
    });
  } else {
    res.send("Usuario o contraseña incorrectos");
  }
});
//verificar token
const verificacion = express.Router();
verificacion.use((req, res, next) => {
  let token = req.headers["x-access-token"] || req.headers["authorization"];
  if (!token) {
    res.status(401).send({
      message: "No tienes permisos",
    });
    return;
  }
  if (token.startWith("Bearer")) {
    token = token.slice(7, token.length);
    console.log(token);
  }
  jwt.verify(token, app.get("key"), (err, decoded) => {
    if (err) {
      res.status(401).send({
        message: "Token invalido",
      });
      return;
    }
    req.user = decoded.username;
    next();
  });
});
// verificar token
app.get("/verificacion", verificacion, (req, res) => {
  res.json({
    message: "Tienes permisos",
  });
});
// rutas protegidas
//agregar productos
app.post("/add", verificacion, (req, res) => {
  const sql = `INSERT INTO productos SET ?`;
  const productoOBJ = {
    ID_producto: req.body.ID_producto,
    ID_Categorias: req.body.ID_Categorias,
    Nombre: req.body.Nombre,
    Marca: req.body.Marca,
    Precio: req.body.Precio,
    Descripcion: req.body.Descripcion,
    InVentario: req.body.InVentario,
    ImagenesURL: req.body.ImagenesURL,
  };
  connection.query(sql, productoOBJ, (err, results) => {
    if (err) throw err;
    res.send("Producto agregado");
  });
});
//actualizar productos
app.put("/update/:id", verificacion, (req, res) => {
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
app.delete("/delete/:id", verificacion, (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM productos WHERE ID_producto = ${id}`;
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send("Producto eliminado");
  });
});
