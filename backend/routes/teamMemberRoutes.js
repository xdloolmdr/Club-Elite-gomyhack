const express = require('express');
const teamMemberController = require('../controllers/teamMemberController');
const { authMiddleware } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/teamMembers', authMiddleware, teamMemberController.createTeamMember);
router.get('/teamMembers', teamMemberController.getAllTeamMembers);
router.get('/teamMembers/:id', teamMemberController.getTeamMemberById);
router.patch('/teamMembers/:id', authMiddleware,teamMemberController.updateTeamMemberById);
router.delete('/teamMembers/:id', authMiddleware, teamMemberController.deleteTeamMemberById);

module.exports = router;