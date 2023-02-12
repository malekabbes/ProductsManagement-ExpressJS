var express = require("express");
var router = express.Router();
var os = require("os");
var base = "/system";
router.get(base + "/", (req, res, next) => {
  res.json({
    hostname: os.hostname(),
    type: os.platform(),
    platform: os.platform(),
  });
});
router.get(base + "/cpus", (req, res, next) => {
  res.type("json").send(JSON.stringify(os.cpus(), null, 1));
});
router.get(base + "/cpus/:id", (req, res, next) => {
  const id = req.params.id;
  res.type("json").send(JSON.stringify(os.cpus()[id], null, 1));
});
module.exports = router;
