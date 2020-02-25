const router = requir("express").Router();
const path = require("path");
router.route("/apis", apiRoutes);

router.route("*", (req, res) => {
  res.sendFile(path.join(__dirname + "../client/public/index.html"));
});

module.exports.router = router;
