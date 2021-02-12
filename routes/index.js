var express = require("express");
var router = express.Router();
var Urls = require("../models/urls");
var axios = require("axios");

/* GET home page. */
router.get("/", function (req, res, next) {
  axios.get("https://ushotify.herokuapp.com/api/stats").then((data) => {
    var shortUrl = data.data[data.data.length - 1].short;
    var longUrl = data.data[data.data.length - 1].full;
    var clicks = data.data[data.data.length - 1].clicks;
    res.render("index", {
      title: "uShotify",
      shortUrl: shortUrl,
      longUrl: longUrl,
      clicks: clicks,
      newGenUrl: "",
    });
  })
  .catch((err)=>next(err));
});

router.post("/", function (req, res, next) {
  Urls.create(req.body)
    .then((url) => {
      console.log(req.body);
      if (req.body.fromIndex == "true") {
        var newGenUrl = url.short;
        axios.get("https://ushotify.herokuapp.com/api/stats").then((data) => {
          var shortUrl = data.data[data.data.length - 1].short;
          var longUrl = data.data[data.data.length - 1].full;
          var clicks = data.data[data.data.length - 1].clicks;
          res.render("index", {
            title: "uShotify",
            shortUrl: shortUrl,
            longUrl: longUrl,
            clicks: clicks,
            newGenUrl: newGenUrl,
          });
        });
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(url);
      }
    })
    .catch((err) => next(err));
});

module.exports = router;
