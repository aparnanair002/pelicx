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
    let query = 'SELECT * FROM tbl_users WHERE user_id = ?';
    let id = req.body.id;
    con.query(query, [id], (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});
module.exports = router;