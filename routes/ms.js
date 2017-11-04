var models = require('../models');
var express = require('express');
var router = express.Router();

router.post('/registerNewClient', (req, res)=>{

    console.log("i am called", res,req)
    models.Seller.create({
        company_name: req.body.company_name,
        pincode: req.body.pincode,
        email: req.body.email,
        product: req.body.product,
    }).then((success, res)=>{
        console.log("did this", success, res)
    })
}

)


module.exports = router