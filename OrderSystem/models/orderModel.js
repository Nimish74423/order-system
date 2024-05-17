const mongoose = require("mongoose");

// Create a schema
const orderSchema = new mongoose.Schema({
    "Name": {type: String},
    "PhoneNum":{type: String},
    "MangoNum": {type: String},
    "BerryNum":{type: String},
    "AppleNum":{type: String},
    "SubTotal":{type: String},
    "Tax":{type: String},
    "Total":{type: String}
});

// Create a model
const Order = mongoose.model("orders", orderSchema);

// Export the model
module.exports = {
    Order
};
