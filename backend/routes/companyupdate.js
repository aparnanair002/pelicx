var express = require("express");
var router = express.Router();
var mysql = require("mysql");
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pelicx_db",
});
router.post("/", (req, res, next) => {
    let id=req.body.company_id;
    console.log("backend",id);
   
    query = `SELECT * FROM tbl_company c inner join tbl_location l 
    inner join tbl_users s where s.login_id=c.login_id 
    and c.loc_id=l.loc_id and users_id='${id}'`;
  console.log(query);
  con.query(query, (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});
module.exports = router;
