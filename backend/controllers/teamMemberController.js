const TeamMember = require('../models/TeamMember');

// Create a new team member
exports.createTeamMember = async (req, res) => {
    try {
        const teamMember = new TeamMember(req.body);
        await teamMember.save();
        res.status(201).send(teamMember);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Get all team members
exports.getAllTeamMembers = async (req, res) => {
    try {
        const teamMembers = await TeamMember.find({});
        res.status(200).send(teamMembers);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Get a team member by ID
exports.getTeamMemberById = async (req, res) => {
    try {
        const teamMember = await TeamMember.findById(req.params.id);
        if (!teamMember) {
            return res.status(404).send();
        }
        res.status(200).send(teamMember);
    } catch (error) {
        res.status(500).send(error);
    }
};

// Update a team member by ID
exports.updateTeamMemberById = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'role', 'email'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        const teamMember = await TeamMember.findById(req.params.id);

        if (!teamMember) {
            return res.status(404).send();
        }

        updates.forEach((update) => teamMember[update] = req.body[update]);
        await teamMember.save();
        res.send(teamMember);
    } catch (error) {
        res.status(400).send(error);
    }
};

// Delete a team member by ID
exports.deleteTeamMemberById = async (req, res) => {
    try {
        const teamMember = await TeamMember.findByIdAndDelete(req.params.id);

        if (!teamMember) {
            return res.status(404).send();
        }

        res.send(teamMember);
    } catch (error) {
        res.status(500).send(error);
    }
};