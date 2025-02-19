const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    position: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true
    },
    strongFoot: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    form: {
        type: String,
        enum: ['Ok', 'Bad', 'Inform'], // Only these values are allowed
        required: true
    },
    goals: {
        type: Number,
        default: 0
    },
    assists: {
        type: Number,
        default: 0
    },
    yellowCards: {
        type: Number,
        default: 0
    },
    redCards: {
        type: Number,
        default: 0
    },
    nationality: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
});

// Create the Player model
const Player = mongoose.model('Player', playerSchema);

module.exports = Player;