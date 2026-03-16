const express = require('express');
const router = express.Router();

router.get('/data', (req, res) => {
    const data = [{ id: 1, value: 10 }, { id: 2, value: 20 }];
    res.json(data);
});

module.exports = router;