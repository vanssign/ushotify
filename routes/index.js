var express = require("express");
var router = express.Router();
var Urls = require("../models/urls");
var axios=require("axios");

/* GET home page. */
router.get("/", function (req, res, next) {
  axios.get('http://localhost:3000/stats')
  .then((data)=>{
    var shortUrl=data.data[0].short;
    var longUrl=data.data[0].full;
    var clicks=data.data[0].clicks;
    console.log(shortUrl);
    res.render("index", { title: "uShotify",shortUrl:shortUrl,longUrl:longUrl,clicks:clicks });
  })
});

module.exports = router;
