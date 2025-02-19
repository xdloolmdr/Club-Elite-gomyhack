const Joi = require('joi');

// Define the validation schema for creating a player
const createPlayerValidation = Joi.object({
    name: Joi.string().required().trim(),
    position: Joi.string().required().trim(),
    age: Joi.number().required().min(16).max(50),
    strongFoot: Joi.string().valid('Left', 'Right', 'Both').required(),
    height: Joi.number().required().min(150).max(220),
    weight: Joi.number().required().min(50).max(120),
    form: Joi.string().valid('Ok', 'Bad', 'Inform').required(),
    goals: Joi.number().default(0),
    assists: Joi.number().default(0),
    yellowCards: Joi.number().default(0),
    redCards: Joi.number().default(0)
});

// Define the validation schema for updating a player
const updatePlayerValidation = Joi.object({
    name: Joi.string().trim(),
    position: Joi.string().trim(),
    age: Joi.number().min(16).max(50),
    strongFoot: Joi.string().valid('Left', 'Right', 'Both'),
    height: Joi.number().min(150).max(220),
    weight: Joi.number().min(50).max(120),
    form: Joi.string().valid('Ok', 'Bad', 'Inform'),
    goals: Joi.number(),
    assists: Joi.number(),
    yellowCards: Joi.number(),
    redCards: Joi.number()
}).min(1); // Ensure that at least one field is being updated

module.exports = {
    createPlayerValidation,
    updatePlayerValidation
};
