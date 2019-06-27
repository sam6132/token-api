const express = require('express');
const router = express.Router();


const { deploy } = require('../controller/securedToken.controller')



router.post('/deploy', (req, res) => deploy(req, res))



module.exports = router;