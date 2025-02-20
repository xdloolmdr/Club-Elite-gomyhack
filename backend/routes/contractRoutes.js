const express = require('express');
const router = express.Router();
const contractController = require('../controllers/contractController');
const { authMiddleware } = require('../middlewares/authMiddleware');

// Create a new contract
router.post('/contracts',authMiddleware, contractController.createContract);

// Get all contracts
router.get('/contracts',authMiddleware, contractController.getAllContracts);

// Get a single contract by ID
router.get('/contracts/:id',authMiddleware, contractController.getContractById);

// Update a contract
router.put('/contracts/:id',authMiddleware, contractController.updateContract);

// Delete a contract
router.delete('/contracts/:id',authMiddleware, contractController.deleteContract);

module.exports = router;