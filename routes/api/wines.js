const router = require("express").Router();
const wineController = require("../../controllers/winecontroller");

// Matches with "/api/books"
router.route("/")
  .get(wineController.findAll)
  .post(wineController.create);

// router.route("/wines")
//   .post(wineController.create)
// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(wineController.findById)
  // .put(wineController.update)
  // .delete(wineController.remove);


router
.route("/:producer")
.get(wineController.findByProducer)

module.exports = router;