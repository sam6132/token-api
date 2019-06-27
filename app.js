const express = require('express');
const app = express();
const cors = require('cors');


const erc20 = require('./routes/erc20')
const erc721 = require('./routes/erc721')
const securedToken = require('./routes/securedToken')
const capTable = require('./routes/captable')

// for parsing application/json
app.use(express.json());



app.use(cors());


app.use("/erc20", erc20)
app.use("/erc721", erc721)
app.use("/securedToken", securedToken)
app.use("/captable", capTable)



app.listen(3000, () => {
    console.log("Server running on port 3000");
});
