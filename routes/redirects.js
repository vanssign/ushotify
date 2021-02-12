var express = require("express");
var router = express.Router();
var Urls = require("../models/urls");

router.get("/:shortId", function (req, res, next) {
  Urls.findOne({ short: req.params.shortId })
    .then((url) => {
      // url.clicks++;
      // Urls.save({_id:url._id,clicks:url.clicks});
      if (url != null) {
        res.redirect(url.full);
        res.end();
      } else res.redirect("/");
    })
    .catch((err) => next(err));
});

router.post("/generate", function (req, res, next) {
  Urls.create(req.body)
    .then((url) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(url);
    })
    .catch((err) => next(err));
});

module.exports = router;
