const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

// router .get, router.post, router.put

router.get('/', (req, res) => {
    burger.all(data => {
        let hbsObject = {
            burgers: data
        }
        res.render('index', hbsObject)
    })
})

module.exports = router;