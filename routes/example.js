const express = require("express");
const router = express.Router();

// Note: the "/" really means /example, this is specified in the index.js file where all the routes are mounted.
router.get("/", (req, res) => {


  res.render("example_page");
  
});
module.exports = router;
