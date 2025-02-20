const mongoose = require('mongoose');

const contractSchema = new mongoose.Schema({
  player: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Player',
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  duration: {
    type: Number, 
    required: true,
  },
  startDate: {
    type: Date,
    default: Date.now, 
  },
  endDate: {
    type: Date,
    required: true,
  },
  
},{
    timestamps:true
});

module.exports = mongoose.model('Contract', contractSchema);