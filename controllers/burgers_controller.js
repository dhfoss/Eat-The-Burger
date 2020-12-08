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
    });
});

router.post('/api/burgers', (req, res) => {
    burger.create('burger_name', [req.body.name], result => {
    res.json({ id: result.insertId });
    });
});

module.exports = router;