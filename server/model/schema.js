const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const todoschema = new Schema({
  title: String,
  author_name:String,
  author_surname:String,
  favorite: Boolean,
});

const Todo = mongoose.model("Todo", todoschema);
module.exports = Todo;
