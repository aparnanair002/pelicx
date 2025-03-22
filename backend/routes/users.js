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
  let name = req.body.name;
  let logo = req.body.logo;
  let description = req.body.description;
  let email = req.body.email;
  let password = req.body.password;
  let phone = req.body.phone;
  let licdate = req.body.licdate;
  var regdate = new Date()
  let loc_id = req.body.loc_id;
  let zipcode = req.body.zipcode;
  let address = req.body.address;
  let role=req.body.usertype;
  let gender=req.body.gender;
  let user_code = req.body.status;
 
 
  let pqr = `SELECT * FROM tbl_login WHERE user_name = ?`;
  con.query(pqr, [email], (err, rows) => {
    if (err) {
      console.log(err);
      return res.send({ message: " Username already Exists" });
    }

    if (rows.length === 0) {
      let quer = `INSERT INTO tbl_login (user_name, password,Role, status) VALUES (?, ?, ?,?)`;
      con.query(quer, [email, password,role, user_code], (err, result) => {
        if (err) {

          console.log(err);
          return res.send({ message: "User creation failed" });
        }

        let login_id = result.insertId; // Correctly getting the inserted ID
        console.log("log", login_id);
        if(role=="Company")
          {
             
        let query = `INSERT INTO tbl_company 
        (col_name, col_pict, col_descr, col_phone, col_regdate, col_licdate, loc_id, col_zip, col_address, comp_status,login_id) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)`;
        con.query(
          query,
          [name, logo, description, phone, regdate, licdate, loc_id, zipcode, address,user_code, login_id],
          (err, result) => {
            if (err) {
              console.log(err);
              return res.send({ message: "Company creation failed" });
            }
            res.send({ message: "Company creation success" });
          }
        );
      }
      if(role=="User")
      {
       
        let query = `INSERT INTO tbl_users 
        (fname,logo,description,contact_no,gener,dob,location_id,pin_code,address,user_status,login_id) 
        VALUES (?, ?, ?, ?, ?, ?, ?,?,?,?,?)`;
         
          

        con.query(
          query,
          [name, logo, description, phone, gender, licdate, loc_id, zipcode, address,user_code, login_id],
          (err, result) => {
            if (err) {
              console.log(err);
              return res.send({ message: "User creation failed" });
            }
            res.send({ message: "User creation failed" });
          }
        ); 
      }
      });
    
   
    } else {
      res.send({ message: "Email already exists" });
    }
  });
});

module.exports = router;
