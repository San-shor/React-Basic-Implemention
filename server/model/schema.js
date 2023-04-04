const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const todoschema = new Schema({
  title: String,
  complete: { type: Boolean, default: false },
});

const Todo = mongoose.model("Todo", todoschema);
module.exports = Todo;
