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
    
    let state_id=req.body.state_id;
let query = `delete FROM tbl_state where state_id = '${state_id}'`;
console.log(query);
con.query(query, (err, rows) =>
{
if (err) throw err;
console.log(rows);
res.send({message:"success"});
});
});
module.exports = router;