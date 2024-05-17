const mongoose = require("mongoose");

// Create a schema
const authSchema = new mongoose.Schema({
    username: { type: String, unique: true },
    password: { type: String }
});

// Create a model
const Auth = mongoose.model("users", authSchema);

// Export the model
module.exports = {
    Auth
};
