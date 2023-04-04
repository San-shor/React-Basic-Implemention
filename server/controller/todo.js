const Todo = require("../model/schema");

exports.getAllList = async (req, res) => {
  try {
    const task = await Todo.find({});
    res.status(200);
    res.send(task);
  } catch (error) {
    res.status(400);
    console.log(error);
  }
};

exports.postAllTask = async (req, res) => {
  try {
    const task = req.body;

    const result = await Todo.create(task);
    res.status(201);
    res.send(result);
  } catch (error) {
    res.status(400);
    console.log(error);
  }
};
