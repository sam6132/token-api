const express = require('express');
const router = express.Router();


const { deploy } = require('../controller/erc20.controller')



router.post('/deploy', (req, res) => deploy(req, res))



module.exports = router;