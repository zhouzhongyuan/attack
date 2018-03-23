var express = require('express');
var router = express.Router();

var fakeData = [];


router.get('/', (req, res, next) => {
    res.json(fakeData);
});
router.post('/', (req, res, next) => {

    fakeData.push(req.body.comment);
    res.json(fakeData);
});
module.exports = router;