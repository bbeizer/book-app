const express = require("express");
const cors = require("cors");
const routes = require('./routes');
const pool = require("./db")
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000

//Controllers
const UserController = require('./controllers/UserController');
const BookController = require('./controllers/BookController');
const CollectionController = require('./controllers/CollectionController');


//Middleware
app.use(cors());
app.use(express.json()); //req.body

//Starting the Server
app.listen(port, ()=> {
    console.log(`server has started on port ${port}`);
});

//ROUTES
app.use("/", routes);

//Connect DB
pool.connect()
  .then(() => {
    console.log('Database connected');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });

