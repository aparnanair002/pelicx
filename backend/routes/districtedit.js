var express = require('express');
var router = express.Router();
var db=require('mysql');``

/* GET users listing. */
con=db.createConnection({
  host:'localhost',
  user:'root',
  password:'',
    database:'pelicx_db'
});

router.post('/', (req, res, next) => {
    let district_id=req.body.district_id;
    let state_id = req.body.state_id;
    console.log(state_id);
    let district_name=req.body.district_name;
    let query = `update tbl_district set state_id='${state_id}',district_name='${district_name}' where district_id='${district_id}'`;
 
    console.log(state_id);
    console.log(query);
    
    con.query(query,  (err, result) => {
        if (err) throw err;
        res.send({message:'success'})
    });
});

module.exports = router;


