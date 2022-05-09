const express = require("express");
const mysql = require("mysql");
const path = require("path");
const app = express();
const morgan = require("morgan");
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");
const fileUpload = require("express-fileupload");
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.use(bodyParser.json());
app.use(fileUpload());
//file upload

app.post("/upload", (req, res) => {
  let EDFile = req.files.file;
  EDFile.mv(`./public/img/Productos/${EDFile.name}`, (err) => {
    if (err) return res.status(500).send({ message: err });

    return res.status(200).send({ message: "File uploaded!" });
  });
});

//ejs
app.set("view engine", "ejs");
app.use(expressLayouts);

app.use(morgan("dev"));
//MySQL localhost
/*const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "toor",
  database: "ferre",
});
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});
*/
//MySQL Cloud
const connection = mysql.createConnection({
  host: "byliwhgf4byww7xk5wbr-mysql.services.clever-cloud.com",
  user: "un1hz5wj4mku04ov",
  password: "ConbOaDclrsI27S0f2rq",
  database: "byliwhgf4byww7xk5wbr",
});
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

app.use(express.urlencoded({ extended: false }));

//utilidades
const router = require("./routes/router");
app.use(router.routes);
//Routes
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
}); //Home
app.use(express.static("public")); //Static files

//obtener productos cards
app.get("/cards/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    `SELECT Nombre, ImagenesURL,Precio FROM productos WHERE ID_Categorias = ${id} `,
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
//search productos
app.get("/search/:id", (req, res) => {
  const { id } = req.params;
  connection.query(
    `SELECT Nombre, ImagenesURL,Precio FROM productos WHERE Nombre LIKE '%${id}%'`,
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
//edit productos
app.get("/editProductos/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM productos WHERE ID_producto = ${id}`;
  connection.query(sql, (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
    } else {
      res.send("No hay productos");
    }
  });
});

//app listen
app.listen(port, () => console.log(`localhost:${port}!`));

// rutas protegidas
//login
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const sql = `SELECT * FROM usuarios WHERE USER = '${username}' AND PASSWORD = '${password}'`;
  connection.query(sql, (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.redirect("/admin");
    } else {
      res.send("No hay usuarios");
    }
  });
});
//registro
//agregar productos

app.post("/add", (req, res) => {
  const sql = `INSERT INTO productos SET ?`;
  const productoOBJ = {
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
    res.redirect("/admin/productos");
    //se agrego correctamente
  });
});

//actualizar productos
app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { ID_Categorias, Nombre, Marca, Precio, Descripcion, InVentario } =
    req.body;
  const sql = `UPDATE productos SET ? WHERE ID_producto = ${id}`;
  const productoOBJ = {
    ID_Categorias,
    Nombre,
    Marca,
    Precio,
    Descripcion,
    InVentario,
  };
  connection.query(sql, productoOBJ, (err, results) => {
    if (err) throw err;
    res.redirect("/admin/productos");
    //se agrego correctamente
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
//categorias
// all Categorias
app.get("/categorias", (req, res) => {
  connection.query("SELECT * FROM categorias", (err, results) => {
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
//categorias por id
app.get("/categorias/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM categorias WHERE ID_Categorias = ${id}`;
  connection.query(sql, (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      res.json(results);
    } else {
      res.send("No hay productos");
    }
  });
});
// rutas protegidas
//agregar Categorias
app.post("/api/categoria/add", (req, res) => {
  const sql = `INSERT INTO categorias SET ?`;
  const productoOBJ = {
    Nombre: req.body.Nombre,
  };
  connection.query(sql, productoOBJ, (err, results) => {
    if (err) throw err;
    res.send("Categoria Agregada");
  });
});
//actualizar Categoria
app.put("/api/categoria/update/:id", (req, res) => {
  const { id } = req.params;
  const { Nombre } = req.body;
  const sql = `UPDATE categorias SET ? WHERE ID_Categorias = ${id}`;
  const productoOBJ = {
    Nombre,
  };
  connection.query(sql, productoOBJ, (err, results) => {
    if (err) throw err;
    res.redirect("/admin/categorias");
  });
});
//eliminar Categoria
app.delete("/categoria/delete/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM categorias WHERE ID_Categorias = ${id}`;
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.redirect("/admin/categorias");
  });
});
//Usuarios
// all Usuarios
app.get("/usuarios", (req, res) => {
  connection.query("SELECT ID_USER,USER FROM usuarios", (err, results) => {
    if (err) {
      console.log(err);
      throw err;
    }
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send("No hay Usuarios");
    }
  });
});
//categorias por id
app.get("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT ID_USER,USER FROM usuarios WHERE ID_USER = ${id}`;
  connection.query(sql, (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      res.json(results);
    } else {
      res.send("No hay Usuarios");
    }
  });
});
// rutas protegidas
//agregar Categorias
app.post("/usuarios/add", (req, res) => {
  const sql = `INSERT INTO usuarios SET ?`;
  const productoOBJ = {
    USER: req.body.USER,
    PASSWORD: req.body.PASSWORD,
  };
  connection.query(sql, productoOBJ, (err, results) => {
    if (err) throw err;
    res.send("Usuario Agregado");
  });
});
//actualizar Usuarios
app.put("/usuarios/update/:id", (req, res) => {
  const { id } = req.params;
  const { ID_Categorias, Nombre } = req.body;
  const sql = `UPDATE usuarios SET ? WHERE ID_USER = ${id}`;
  const productoOBJ = {
    ID_Categorias,
    Nombre,
  };
  connection.query(sql, productoOBJ, (err, results) => {
    if (err) throw err;
    res.send("Usuario actualizada");
  });
});
//eliminar Usuarios
app.delete("/usuarios/delete/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM categorias WHERE ID_Categorias = ${id}`;
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send("Usuario Eliminado");
  });
});
