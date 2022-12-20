const router=require("express").Router();
const TaskController=require("../controlers/taskController");

router.get("/",(req,res)=>{
    res.send(hello);
})
router.post("/add",TaskController.addTask);
router.get("/getSingleTask/:id",TaskController.singleTask);
router.patch("/update/:id",TaskController.update)
router.delete("/delete/:id",TaskController.delete);
router.get("/getAllTask",TaskController.getAllTask);

module.exports= router;

