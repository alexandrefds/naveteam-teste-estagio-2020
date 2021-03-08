const express = require('express');
const router = express.Router();

const projetosController = require('../controllers/projetosController');

router.get('/', projetosController.index);
router.get('/:id', projetosController.show);
router.post('/', projetosController.store);
router.put('/:id', projetosController.update);
router.delete('/:id', projetosController.destroy);

module.exports = router;