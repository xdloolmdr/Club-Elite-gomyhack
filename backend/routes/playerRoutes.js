const express = require("express");
const playerController = require("../controllers/playerController");
const { authMiddleware } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/players", authMiddleware, playerController.createPlayer);
router.get("/players", playerController.getAllPlayers);
router.get("/players/:id", playerController.getPlayerById);
router.patch("/players/:id", authMiddleware, playerController.updatePlayerById);
router.delete(
  "/players/:id",
  authMiddleware,
  playerController.deletePlayerById
);

module.exports = router;
