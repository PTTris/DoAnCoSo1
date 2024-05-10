const express = require("express");
const router = express.Router();
const {
    getHomepage,
    getUserPT,
    postCreateUser,
    getCreateUser,
} = require("../controllers/homeController");

router.get("/", getHomepage);
router.get("/pt26", getUserPT);
router.get("/create", getCreateUser);

router.post("/create-user", postCreateUser);

module.exports = router;
