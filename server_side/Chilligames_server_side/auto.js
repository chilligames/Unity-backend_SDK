﻿var express = require('express');
var app = express();




var host_reg = "127.0.0.1";
var port_reg = 3333;
app.listen(port_reg, host_reg);

app.put('/reg_admin', function (req, res) {


    var Email = req.header("Email");

    console.log(Email);

    res.json({ "hi": "bith" });

    res.end();

});