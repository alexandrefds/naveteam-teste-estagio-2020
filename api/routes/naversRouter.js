const express = require('express');
const router = express.Router();

const naverController = require('../controllers/naversController');

router.get('/', naverController.index);
router.get('/:id', naverController.show);
router.post('/', naverController.store);
router.put('/:id', naverController.update);
router.delete('/:id', naverController.destroy);

module.exports = router;