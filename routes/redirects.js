var express = require("express");
var router = express.Router();
var Urls = require("../models/urls");
var axios=require("axios")

router.get("/:shortId", function (req, res, next) {
  Urls.findOne({ short: req.params.shortId })
    .then((url) => {
      if (url != null) {
        res.redirect(url.full);
        res.end();
      } else res.redirect("/");
    })
    .catch((err) => next(err));
});

module.exports = router;
