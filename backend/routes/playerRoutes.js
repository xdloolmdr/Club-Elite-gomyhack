const express = require('express');
const playerController = require('../controllers/playerController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const validationMiddleware = require('../middlewares/validationMiddleware');
const { validateCreatePlayer, validateUpdatePlayer } = require('../validations/playerValidation');

const router = express.Router();

router.post('/players', authMiddleware, validationMiddleware(validateCreatePlayer), playerController.createPlayer);
router.get('/players', playerController.getAllPlayers);
router.get('/players/:id', playerController.getPlayerById);
router.patch('/players/:id', authMiddleware, validationMiddleware(validateUpdatePlayer), playerController.updatePlayerById);
router.delete('/players/:id', authMiddleware, playerController.deletePlayerById);

module.exports = router;