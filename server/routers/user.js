const express = require('express');
const router = express.Router();
const  {createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,}= require('../controllers/user');

// Create a new user
router.post('/', createUser);

// Get all users
router.get('/', getUsers);

// Get a user by ID
router.get('/:id', getUserById);

// Update a user
router.put('/:id', updateUser);

// Delete a user
router.delete('/:id',deleteUser);

module.exports = router;
