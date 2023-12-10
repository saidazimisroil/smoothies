const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter a title"],
        unique: true,
    },
    price: {
        type: Number,
        required: [true, "Please enter a number for the price"],
    },
    image: {
        type: String,
    },
});

// fire a function after doc saved to db
productSchema.post("save", function (doc, next) {
    console.log("new product is saved", doc);
    next();
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
