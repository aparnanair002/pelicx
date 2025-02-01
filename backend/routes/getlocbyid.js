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
    let loc_id = req.body.loc_id;
    let query = `SELECT * FROM tbl_location l inner join tbl_district d inner join tbl_state s where s.state_id=d.state_id and l.district_id=d.district_id and l.loc_id = '${loc_id}'`;
   
    con.query(query, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});
module.exports = router;