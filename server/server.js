const express = require("express");
const cors = require("cors");
const pool = require("./db");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;

// Routes
const bookRoutes = require('./routes/bookRoutes');
const userRoutes = require('./routes/userRoutes');

// Middleware
app.use(cors());
app.use(express.json()); // req.body

// Register the routes with the app
app.use('/books', bookRoutes);
app.use('/users', userRoutes);

// Start the Server
app.listen(port, () => {
    console.log(`server has started on port ${port}`);
});

// Connect DB
pool.connect()
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });
