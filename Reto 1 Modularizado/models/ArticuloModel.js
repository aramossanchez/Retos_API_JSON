let ARTICULOS = require('../ARTICULOS.js');

ArticuloModel = {};

//DEFINO FUNCIONES
ArticuloModel.findAll = () => ARTICULOS;

ArticuloModel.findById = (id) => ARTICULOS.find(fabricante => fabricante.id == id);

ArticuloModel.post = (nuevoArticulo) => {
    ARTICULOS.push(nuevoArticulo);
    return nuevoArticulo;
};

ArticuloModel.update = (nuevoArticulo) =>{
    let articulosNuevo = ARTICULOS.filter(articulo => articulo.id != nuevoArticulo.id);
    articulosNuevo.push(nuevoArticulo);
    ARTICULOS = articulosNuevo;
    return nuevoArticulo;
};

ArticuloModel.delete = (id) =>{
    let articulosNuevo = ARTICULOS.filter(articulo => articulo.id != id);
    ARTICULOS = articulosNuevo;
    return `Registro ${id} eliminado correctamente`;
};

//EXPORTO
module.exports = ArticuloModel;