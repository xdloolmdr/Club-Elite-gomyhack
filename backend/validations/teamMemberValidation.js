const Joi = require('joi');

// Define the validation schema for creating a team member
const createTeamMemberValidation = Joi.object({
    name: Joi.string().required().trim(),
    role: Joi.string().required().trim(),
    email: Joi.string().email().required().trim().lowercase()
});

// Define the validation schema for updating a team member
const updateTeamMemberValidation = Joi.object({
    name: Joi.string().trim(),
    role: Joi.string().trim(),
    email: Joi.string().email().trim().lowercase()
}).min(1); 

module.exports = {
    createTeamMemberValidation,
    updateTeamMemberValidation
};