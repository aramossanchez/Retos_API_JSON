let FABRICANTES = require('../FABRICANTES.js');

FabricanteModel = {};

//DEFINO FUNCIONES
FabricanteModel.findAll = () => FABRICANTES;

FabricanteModel.findById = (id) => FABRICANTES.find(fabricante => fabricante.id == id);

FabricanteModel.post = (nuevoFabricante) => {
    FABRICANTES.push(nuevoFabricante);
    return nuevoFabricante;
};

FabricanteModel.update = (nuevoFabricante) =>{
    let fabricantesNuevo = FABRICANTES.filter(fabricante => fabricante.id != nuevoFabricante.id);
    fabricantesNuevo.push(nuevoFabricante);
    FABRICANTES = fabricantesNuevo;
    return nuevoFabricante;
};

FabricanteModel.delete = (id) =>{
    let fabricantesNuevo = FABRICANTES.filter(fabricante => fabricante.id != id);
    FABRICANTES = fabricantesNuevo;
    return `Registro ${id} eliminado correctamente`;
};

//EXPORTO
module.exports = FabricanteModel;