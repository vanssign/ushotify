var express = require("express");
var router = express.Router();
var Urls = require("../models/urls");

router.get("/", function (req, res, next) {
  Urls.find({})
    .then((url) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(url);
    })
    .catch((err) => next(err));
});

router.get("/:shortId", function (req, res, next) {
  Urls.findOne({ short: req.params.shortId })
    .then((url) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(url);
    })
    .catch((err) => next(err));
});

module.exports = router;
