const expresss = require ("express");
const router = expresss.Router();

const ArticuloController = require ("../controllers/ArticuloController.js");

router.get("/", ArticuloController.getAll);

router.get("/:id", ArticuloController.getById);

router.post("/", ArticuloController.postArticulo);

router.put("/:id", ArticuloController.updateArticulo);

router.delete("/:id", ArticuloController.deleteArticulo);

module.exports = router;