const express = require('express'),
    fs = require('fs'),
    router = express.Router();

function readJsonFileSync(filepath){
    return JSON.parse(fs.readFileSync(filepath, 'utf8'));
}

/* GET offenders listing. */
router.get('/', function(req, res) {
    res.json(readJsonFileSync(process.cwd() + '/public/data/stub.json'));
});

module.exports = router;
