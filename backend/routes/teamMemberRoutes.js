const express = require('express');
const teamMemberController = require('../controllers/teamMemberController');
const { authMiddleware } = require('../middlewares/authMiddleware');
const validationMiddleware = require('../middlewares/validationMiddleware');
const { validateCreateTeamMember, validateUpdateTeamMember } = require('../validations/teamMemberValidation');

const router = express.Router();

router.post('/teamMembers', authMiddleware, validationMiddleware(validateCreateTeamMember), teamMemberController.createTeamMember);
router.get('/teamMembers', teamMemberController.getAllTeamMembers);
router.get('/teamMembers/:id', teamMemberController.getTeamMemberById);
router.patch('/teamMembers/:id', authMiddleware, validationMiddleware(validateUpdateTeamMember), teamMemberController.updateTeamMemberById);
router.delete('/teamMembers/:id', authMiddleware, teamMemberController.deleteTeamMemberById);

module.exports = router;