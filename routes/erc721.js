const express = require('express');
const router = express.Router();


const { deploy, mint, getBalance, ownerOf } = require('../controller/erc721.controller')



router.post('/deploy', (req, res) => deploy(req, res))

router.post('/mint', (req, res) => mint(req, res))

router.post('/balanceOf', (req, res) => getBalance(req, res))

router.post('/ownerOf', (req, res) => ownerOf(req, res))



module.exports = router;