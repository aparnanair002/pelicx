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
    let id=req.body.users_id;
    console.log("backend",id);
   
    query = `SELECT c.col_address, c.col_descr, c.col_licdate, c.col_name, 
    c.col_phone, c.col_pict, c.col_zip, d.district_id, d.district_name, 
    l.loc_id, l.loc_name, d.state_id, s.comp_status FROM tbl_company c INNER JOIN tbl_location l 
    ON c.loc_id = l.loc_id INNER JOIN tbl_district d ON 
    d.district_id = l.district_id INNER JOIN 
    tbl_users s ON c.login_id = s.login_id WHERE c.users_id ='${id}'
`;
  console.log(query);
  con.query(query, (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});
module.exports = router;
