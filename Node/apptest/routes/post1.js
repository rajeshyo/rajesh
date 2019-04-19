const router = require("express").Router();
const mongoose = require("mongoose");

const Post1 = mongoose.model("Post2");
// const Comment = mongoose.model("Comment");
// const Replay = mongoose.model("Replay");
// const Country = mongoose.model("Country");

//view get operation
// router.post("/",async(req, res)=>{
//     const posts = await Post.find({})
//     res.send(posts)
//     // res.send({ok:true});
// });
router.post("/",async(req, res)=>{
    const postt =new Post1();
    // post.title =req.body.title;
    postt.content =req.body.content;
    await postt.save();
    res.send(postt)
    // res.send({ok:true});
 });

 router.get("/",async(req, res)=>{
    const postt = await Post1.find({})
    res.send(postt)
    // res.send({ok:true});
});

router.delete("/",async(req, res)=>{
    const student= await Student.remove()
res.send({message:"student delete successfull"})
});

router.put("/:studentId",async(req, res)=>{
    const student= await Student.findByIdAndUpdate({
        _id: req.params.studentId},
        req.body,{
            new:true,
            runValidators:true
        });
res.send(student)
    // res.send({ok:true});
});


module.exports= router;