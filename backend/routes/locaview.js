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
    
    let district_id=req.body.district_id;
let query = `SELECT * FROM tbl_location l inner join tbl_district d inner join tbl_state s where s.state_id=d.state_id and l.district_id=d.district_id and l.district_id = '${district_id}'`;
console.log(query);
con.query(query, (err, rows) =>
{
if (err) throw err;
console.log(rows);
res.send(rows);
});
});
module.exports = router;