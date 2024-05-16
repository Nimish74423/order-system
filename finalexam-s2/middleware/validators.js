const { check, oneOf, body } = require("express-validator");
const {Auth} = require("../models/authModel")

const authValidators = [
    check("LoginName").notEmpty().withMessage("You need to enter a name"),
    check("Password").notEmpty().withMessage("You need to enter a password"),
    body("LoginName").custom(async (LoginName, {req}) => {

        let ab = await Auth.findOne({username: LoginName, password: req.body.Password}).exec();
        if(!ab){
            throw new Error(`Invalid credentials`);
        }
        

    })
];

const orderValidators = [
    check("UserName").notEmpty().withMessage("you need to enter name"),
    check("PhoneNo").notEmpty().isMobilePhone().withMessage("you need to enter phone num")
];

module.exports = {
    authValidators,
    orderValidators
};
