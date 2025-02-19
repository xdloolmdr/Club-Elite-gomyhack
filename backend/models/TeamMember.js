const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    }
}, {
    timestamps: true
});

// Create the TeamMember model
const TeamMember = mongoose.model('TeamMember', teamMemberSchema);

module.exports = TeamMember;