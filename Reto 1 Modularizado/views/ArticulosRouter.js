const expresss = require ("express");
const router = expresss.Router();

const ArticuloController = require ("../controllers/ArticuloController.js");

router.get("/", ArticuloController.getAll);

router.get("/:id", ArticuloController.getById);

router.post("/", ArticuloController.postArticulos);

router.put("/:id", ArticuloController.updateArticulos);

router.delete("/:id", ArticuloController.deleteArticulos);

module.exports = router;