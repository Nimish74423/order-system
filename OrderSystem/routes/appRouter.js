const express = require("express");
const router = express.Router();

// Import controllers, validators
const { getLogin, postLogin, getLogout } = require("../controllers/authController");
const { getOrder, postOrder, getAllOrders } = require("../controllers/orderController");
const { authValidators, orderValidators } = require("../middleware/validators");

router
    .get("/login", getLogin)
    .post("/login", authValidators, postLogin)
    .get("/logout", getLogout)
    .get("/", getOrder)
    .post("/", orderValidators, postOrder)
    .get("/orders", getAllOrders);

// Build routes
router.get("/", (req, res) => { res.send("It works!") });

module.exports = router;
