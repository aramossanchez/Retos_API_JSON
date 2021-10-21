const articulos = require("../models/ArticuloModel.js");

const ArticuloController = {};

ArticuloController.getAll =  (req, res) =>{
    res.json(articulos.findAll());
};

ArticuloController.getById = (req,res) =>{
    res.json(articulos.findById(req.params.id));
};

ArticuloController.postArticulo = (req, res) =>{
    const id = req.body.id;
    const Nombre = req.body.Nombre;
    const Precio = req.body.Precio;
    const Fabricante = req.body.Fabricante;
    res.json(articulos.post({id, Nombre, Precio, Fabricante}));
};

ArticuloController.updateArticulo = (req,res) => {
    const id = req.params.id;
    const body = req.body;
    res.json(articulos.update({id, ...body}));
};

ArticuloController.deleteArticulo = (req,res) =>{
    res.send(articulos.delete(req.params.id));
};

module.exports = ArticuloController;