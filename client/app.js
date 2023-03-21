const express = require("express")
const app = express();
const port = process.env.PORT

app.get('/', (req, res)=> {
    res.send('Hello Chicken!');
});

app.listen(port, () => {
    console.log(`App is listening at https://localhost:${port}`);
});