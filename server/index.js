const Express = require("express");
const app = new Express();
const mongoose = require("mongoose");
const router = require("./router");
const cors = require("cors");

app.use(cors());
app.use(Express.json());
app.use(router);

(async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/react-todo");
    console.log("connected successfully");
    app.listen(3000, () => {
      console.log(`Server running at http://localhost:3000`);
    });
  } catch (error) {
    console.log(error);
  }
})();
