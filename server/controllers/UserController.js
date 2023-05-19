// UserController.js
const User = require('../models/User');

const UserController = {
  register: async (req, res) => {
    // Handle user registration logic
  },

  login: async (req, res) => {
    // Handle user login logic
  },

  createUser: async (req, res) => {
    try {
      // Extract data from the request body
      const { name, email } = req.body;

      // Create a new user
      const user = await User.create({ name, email });

      // Send the response
      res.status(201).json(user);
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ error: 'Failed to create user' });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      // Retrieve all users from the database
      const users = await User.findAll();

      // Send the response
      res.status(200).json(users);
    } catch (error) {
      console.error('Error getting users:', error);
      res.status(500).json({ error: 'Failed to get users' });
    }
  },

  getUserById: async (req, res) => {
    try {
      // Extract the user ID from the request parameters
      const { id } = req.params;

      // Retrieve the user from the database by ID
      const user = await User.findById(id);

      // Check if the user exists
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Send the response
      res.status(200).json(user);
    } catch (error) {
      console.error('Error getting user:', error);
      res.status(500).json({ error: 'Failed to get user' });
    }
  },

  updateUser: async (req, res) => {
    try {
      // Extract the user ID from the request parameters
      const { id } = req.params;

      // Extract data from the request body
      const { name, email } = req.body;

      // Update the user in the database
      const updatedUser = await User.update(id, { name, email });

      // Check if the user exists
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Send the response
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ error: 'Failed to update user' });
    }
  },
  deleteUser: async (req, res) => {
    try {
      // Extract the user ID from the request parameters
      const { id } = req.params;

      // Delete the user from the database
      const deletedUser = await User.delete(id);

      // Check if the user exists
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }

      // Send the response
      res.status(200).json(deletedUser);
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ error: 'Failed to delete user' });
    }
  }

};
