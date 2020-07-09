const router = require(express).Router();
const modelsController = require('../../controllers/modelsController');

router.route('/')
  .get(modelsController.findAll)
  .post(modelsController.create);

router.route('/:id')
  .delete(modelsController.delete);

module.exports = router;
