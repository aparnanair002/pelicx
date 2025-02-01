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
  let loc_name = req.body.loc_name;
  let district_id = req.body.district_id;
  console.log(loc_name);

  let query = `INSERT INTO tbl_location (loc_name, district_id)
SELECT '${loc_name}', '${district_id}'
WHERE NOT EXISTS (
    SELECT 1 
    FROM tbl_location 
    WHERE loc_name = '${loc_name}'
);`;
console.log(query);
  con.query(query, (err, result) => {
    if (err) throw err;
    res.send({ message: "success" });
  });
});
module.exports = router;
