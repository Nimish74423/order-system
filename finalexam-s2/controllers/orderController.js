const { validationResult } = require("express-validator");
const { Order } = require("../models/orderModel");

const getOrder = (req, res) => {
    res.redirect("/login");
};

const postOrder = (req, res) => {
    let error = validationResult(req);
    if(!error.isEmpty()){
        res.render("pages/order", {errors: error.array()});
    }else{
        let Name = req.body.UserName;
    let Phone = req.body.PhoneNo;
    let mango = req.body.MangoJuices;
    let berry = req.body.BerryJuices;
    let apple = req.body.AppleJuices;
    let SubTotal = parseFloat(mango) + parseFloat(berry) + parseFloat(apple);
    let tax = SubTotal * 0.13;
    let total = SubTotal + tax;

    let newOrder = new Order({
        Name : Name,
        PhoneNum: Phone,
        MangoNum: mango,
        BerryNum: berry,
        AppleNum: apple,
        SubTotal: SubTotal,
        Tax: tax,
        Total: total
    })
    newOrder.save();
        res.render("pages/thankyou",{name: Name, Phone: Phone, mango: mango,berry: berry,apple: apple,SubTotal: SubTotal,tax: tax,total: total});
    }
    
};

const getAllOrders = async (req, res) => {
    let data = await Order.find({}).exec();
    res.render("pages/allorders",{orders: data})
};

module.exports = {
    getOrder,
    postOrder,
    getAllOrders
};
