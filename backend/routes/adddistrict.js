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
  let district_name = req.body.district_name;
  let state_id = req.body.state_id;
  console.log("hi",state_id,district_name);
  let query = `INSERT INTO tbl_district (district_name, state_id)
SELECT '${district_name}', '${state_id}'
WHERE NOT EXISTS (
    SELECT 1 
    FROM tbl_district 
    WHERE district_name = '${district_name}'
);`;
  con.query(query, (err, result) => {
    if (err) throw err;
    res.send({ message: "success" });
  });
});
module.exports = router;
