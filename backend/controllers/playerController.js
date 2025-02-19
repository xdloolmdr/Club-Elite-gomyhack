const Player = require('../models/Player');

// Create a new player
exports.createPlayer = async (req, res) => {
    try {
        const player = new Player(req.body);
        await player.save();
        res.status(201).send(player);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all players
exports.getAllPlayers = async (req, res) => {
    try {
        const players = await Player.find({});
        res.status(200).send(players);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a player by ID
exports.getPlayerById = async (req, res) => {
    try {
        const player = await Player.findById(req.params.id);
        if (!player) {
            return res.status(404).send();
        }
        res.status(200).send(player);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a player by ID
exports.updatePlayerById = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'position', 'age', 'strongFoot', 'height', 'weight', 'form', 'goals', 'assists', 'yellowCards', 'redCards'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const player = await Player.findById(req.params.id);

        if (!player) {
            return res.status(404).send();
        }

        updates.forEach((update) => player[update] = req.body[update]);
        await player.save();
        res.send(player);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a player by ID
exports.deletePlayerById = async (req, res) => {
    try {
        const player = await Player.findByIdAndDelete(req.params.id);

        if (!player) {
            return res.status(404).send();
        }

        res.send(player);
    } catch (error) {
        res.status(500).send(error);
    }
};