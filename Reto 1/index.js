const express = require ("express");
const colors = require("colors");
const morgan = require("morgan");
const logger = require("./config/winston.js");

const app = express();

const PORT = 3000;



//MIDDLEWARE --> SE EJECUTARÁ SIEMPRE ANTES DE HACER CUALQUIER COSA
app.use(morgan("combined", {stream: logger.stream}));
app.use(express.json());// USADO UNICAMENTE PARA USAR LOS OBJETOS CREADOS EN INDEX.JS SIMULANDO BASE DE DATOS

app.listen(PORT, ()=>{
    console.log(`Server on port ${PORT}`.bgBlue.white);
});

var FABRICANTES = [
    {id: 1, Nombre: "Sony"},
    {id: 2, Nombre: "Valve"},
    {id: 3, Nombre: "Fujitsu"},
    {id: 4, Nombre: "Lenovo"}
];

var ARTICULOS = [
    {id: 1, Nombre: "TV", Precio: 500, Fabricante: 1},
    {id: 2, Nombre: "SteamDeck", Precio: 600, Fabricante: 2},
    {id: 3, Nombre: "Nevera", Precio: 800, Fabricante: 3},
    {id: 4, Nombre: "Portatil", Precio: 350, Fabricante: 4}
];

app.get("/", (req, res) =>{
    let date = new Date();
    // console.log("home route works -------" + date)
    res.send("Bienvenido a Express");
});

//ENDPOINTS DE FABRICANTES
app.get("/fabricantes", (req, res) =>{
    res.send(FABRICANTES);
});

app.get("/fabricantes/:id", (req, res) =>{
    const id = req.params.id;
    let fabricante = FABRICANTES.find(fabricante => fabricante.id == id);
    res.json(fabricante);
});

app.post("/fabricantes", (req,res) =>{
    let id = req.body.id;
    let Nombre = req.body.Nombre;
    let nuevoFabricante = {id, Nombre};
    FABRICANTES.push(nuevoFabricante);
    res.send(nuevoFabricante);
});

app.put("/fabricantes/:id", (req,res) =>{
    const id = req.params.id;
    const Nombre = req.body.Nombre;
    let listaFabricantes = FABRICANTES.filter(fabricante => fabricante.id != id);
    let fabricante = {id, Nombre};
    listaFabricantes.push(fabricante);
    FABRICANTES = listaFabricantes;
    res.send(fabricante);
});

app.delete("/fabricantes/:id", (req,res) =>{
    const id = req.params.id;
    let listaFabricantes = FABRICANTES.filter(fabricante => fabricante.id != id);
    FABRICANTES = listaFabricantes;
    res.send(`Fabricante ${id} borrado.`);
});

//ENDPOINTS DE ARTICULOS
app.get("/articulos", (req, res) =>{
    res.send(ARTICULOS);
});

app.get("/articulos/:id", (req, res) =>{
    const id = req.params.id;
    let articulo = ARTICULOS.find(articulo => articulo.id == id);
    res.json(articulo);
});

app.post("/articulos", (req,res) =>{
    let id = req.body.id;
    let Nombre = req.body.Nombre;
    let Precio = req.body.Precio;
    let Fabricante = req.body.Fabricante;
    let nuevoArticulo = {id, Nombre, Precio, Fabricante};
    ARTICULOS.push(nuevoArticulo);
    res.send(nuevoArticulo);
});

app.put("/articulos/:id", (req,res) =>{
    let id = req.params.id;
    let Nombre = req.body.Nombre;
    let Precio = req.body.Precio;
    let Fabricante = req.body.Fabricante;
    let listaArticulos = ARTICULOS.filter(articulo => articulo.id != id);
    let articulo = {id, Nombre, Precio, Fabricante};
    listaArticulos.push(articulo);
    ARTICULOS = listaArticulos;
    res.send(articulo);
});

app.delete("/articulos/:id", (req,res) =>{
    const id = req.params.id;
    let listaArticulos = ARTICULOS.filter(articulo => articulo.id != id);
    ARTICULOS = listaArticulos;
    res.send(`Articulo ${id} borrado.`);
});