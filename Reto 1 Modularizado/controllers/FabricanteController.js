const fabricantes = require("../models/FabricanteModel.js");

const FabricanteController = {};

FabricanteController.getAll =  (req, res) =>{
    res.json(fabricantes.findAll());
};

FabricanteController.getById = (req,res) =>{
    res.json(fabricantes.findById(req.params.id));
};

FabricanteController.postFabricante = (req, res) =>{
    const id = req.body.id;
    const title = req.body.title;
    res.json(fabricantes.post({id, title}));
};

FabricanteController.updateFabricante = (req,res) => {
    const id = req.params.id;
    const body = req.body;
    res.json(fabricantes.update({id, ...body}));
};

FabricanteController.deleteFabricante = (req,res) =>{
    res.send(fabricantes.delete(req.params.id));
}

module.exports = FabricanteController;