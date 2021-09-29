const express = require('express');
const fs = require('fs');
const path = require('path');

let router = express.Router();

router.get('/', async (req, res) => {
    try {
        const data = fs.readFileSync(path.join(__dirname, '../data.json'));
        const art = JSON.parse(data);

        res.status(200).json(art);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
})

module.exports = router;