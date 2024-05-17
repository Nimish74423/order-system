const { validationResult } = require("express-validator");
const { Auth } = require("../models/authModel");

const getLogin = (req, res) => {
    
    res.render("pages/login");
};

const postLogin = async (req, res) => {
    let error = validationResult(req);
    if(!error.isEmpty()){
        res.render("pages/login", {errors: error.array()});
    }else{
        
        res.render("pages/order");
    }
};

const getLogout = (req, res) => {
    
};

module.exports = {
    getLogin,
    postLogin,
    getLogout
};
