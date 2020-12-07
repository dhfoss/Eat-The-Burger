const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

// router .get, router.post, router.put

router.get('/', (req, res) => {
    res.send('test');
})

module.exports = router;