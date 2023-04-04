const router = require("express").Router();
const controller = require("./controller/todo");

router.get("/tasks", controller.getAllList);
router.post("/tasks", controller.postAllTask);

module.exports = router;
