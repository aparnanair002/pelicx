var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
host: "localhost",
user: "root",
password: "",
database: "pelicx_db"
});
router.get('/', (req, res, next) => {
let query = `SELECT * FROM tbl_state`;
con.query(query, (err, rows) =>
{
if (err) throw err;
res.send(rows);
});
});
module.exports = router;