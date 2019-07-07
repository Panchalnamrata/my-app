const mongoose = require ('mongoose');

const PizzaItemSchema = mongoose.Schema(
    {
    pizzaName:{
        type:String,
        required: true
    },
    Price:{
        type: Number
    }
});
 
const Pizza =module.exports = mongoose.model("Pizza",PizzaItemSchema);