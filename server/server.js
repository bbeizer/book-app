const express = require("express")
require("dotenv").config();
const app = express();
const cors = require("cors")
const pool = require("./db")
const port = process.env.PORT || 5000

//middleware
app.use(cors());
app.use(express.json()); //req.body

app.listen(port, ()=> {
    console.log(`server has started on port ${port}`);
});

//ROUTES
app.get("/home")