const FabricanteRouter = require("./views/FabricanteRouter.js");
const ArticuloRouter = require("./views/ArticuloRouter.js");

const router = require("express").Router();

router.use("/fabricantes", FabricanteRouter);
router.use("/articulos", ArticuloRouter);

module.exports = router;