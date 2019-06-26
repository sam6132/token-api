const express = require('express');
const app = express();
const cors = require('cors');


const erc20 = require('./routes/erc20')

// for parsing application/json
app.use(express.json());



app.use(cors());


app.use("/erc20", erc20)



app.listen(3000, () => {
    console.log("Server running on port 3000");
});
