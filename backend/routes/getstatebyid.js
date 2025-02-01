var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "pelicx_db"
});

router.post('/', (req, res, next) => {
    let query = 'SELECT * FROM tbl_state WHERE state_id = ?';
    let state_id = req.body.state_id;
    console.log(state_id);
    con.query(query, [state_id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});
module.exports = router;