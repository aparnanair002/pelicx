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
    

let id=req.body.state_id;
    
    
let query = `SELECT * FROM tbl_district d inner join tbl_state s where s.state_id=d.state_id and d.state_id = '${id}'`;
console.log(query);
con.query(query, (err, rows) =>
{
if (err) throw err;
console.log(rows);
res.send(rows);
});
});
module.exports = router;