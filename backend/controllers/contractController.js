const Contract = require('../models/Contract');

// Create a new contract
exports.createContract = async (req, res) => {
  try {
    const { player, salary, duration, endDate } = req.body;
    const newContract = new Contract({
      player,
      salary,
      duration,
      endDate,
    });
    await newContract.save();
    res.status(201).json(newContract);
  } catch (error) {
    res.status(500).json({ message: 'Error creating contract', error });
  }
};

// Get all contracts
exports.getAllContracts = async (req, res) => {
  try {
    const contracts = await Contract.find().populate('player'); // Populate player details
    res.status(200).json(contracts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contracts', error });
  }
};

// Get a single contract by ID
exports.getContractById = async (req, res) => {
  try {
    const contract = await Contract.findById(req.params.id).populate('player');
    if (!contract) {
      return res.status(404).json({ message: 'Contract not found' });
    }
    res.status(200).json(contract);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contract', error });
  }
};

// Update a contract
exports.updateContract = async (req, res) => {
  try {
    const { salary, duration, endDate } = req.body;
    const updatedContract = await Contract.findByIdAndUpdate(
      req.params.id,
      { salary, duration, endDate },
      { new: true } 
    );
    if (!updatedContract) {
      return res.status(404).json({ message: 'Contract not found' });
    }
    res.status(200).json(updatedContract);
  } catch (error) {
    res.status(500).json({ message: 'Error updating contract', error });
  }
};

// Delete a contract
exports.deleteContract = async (req, res) => {
  try {
    const deletedContract = await Contract.findByIdAndDelete(req.params.id);
    if (!deletedContract) {
      return res.status(404).json({ message: 'Contract not found' });
    }
    res.status(200).json({ message: 'Contract deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting contract', error });
  }
};