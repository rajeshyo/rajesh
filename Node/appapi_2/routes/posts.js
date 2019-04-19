const router = require("express").Router();
const mongoose = require("mongoose");

const Post = mongoose.model("Post");
const Comment = mongoose.model("Comment");
const Replay = mongoose.model("Replay");
// const Country = mongoose.model("Country");

//view get operation
router.get("/",async(req, res)=>{
    const posts = await Post.find({})
    res.send(posts)
    // res.send({ok:true});
});


//create post operation
router.post("/",async(req, res)=>{
    const post =new Post();
    post.title =req.body.title;
    post.content =req.body.content;
    await post.save();
    res.send(post)
 });

//find view by id get operation
//post view
router.get("/:postId",async(req, res)=>{
    const post= await Post.find({_id: req.params.postId})
    res.send(post)
});


//edit/modify put operation
router.put("/:postId",async(req, res)=>{
    const post= await Post.findByIdAndUpdate({
        _id: req.params.postId},
        req.body,{
            new:true,
            runValidators:true
        });
res.send(post)
});

//delete operation

router.delete("/:postId",async(req, res)=>{
        const post= await Post.findByIdAndDelete({_id: req.params.postId,});
    res.send(post)
    });



    //Comment

    //create a comment
router.post("/:postId/comment", async(req,res)=>{
    //find a post 
    const post = await Post.findOne({_id: req.params.postId});

    //Create a comment
    const comment =new Comment();
    comment.content =req.body.content;
    comment.repl =req.body.repl;
    comment.post =post._id;
    await comment.save();

    //Associate post with comment
    post.comments.push(comment._id);
    await post.save();
    res.send(comment);
    // res.send({ok:true});
});


//optional
router.post("/:postId/comment", async(req,res)=>{
    //find a post 
    const post = await Post.findOne({_id: req.params.postId});

    //Create a comment
    const comment =new Comment();
    comment.content =req.body.content;
    comment.repl =req.body.repl;
    comment.post =post._id;
    await comment.save();

    //Associate post with comment
    post.comments.push(comment._id);
    await post.save();
    res.send(comment);
    // res.send({ok:true});
});
  

//find view by id get operation 
//comment view
router.get("/:postId/comment",async(req, res)=>{
    const post= await Post.findOne({_id: req.params.postId}).populate(
        "comments"
    );
    res.send(post);
});


//edit/modify put operation comment
router.put("/comment/:commentId",async(req, res)=>{
    const comment= await Comment.findByIdAndUpdate({
        _id: req.params.commentId},
        req.body,{
            new:true,
            runValidators:true
        });
res.send(comment)
    // res.send({ok:true});
});


//delete operation

router.delete("/comment/:commentId",async(req, res)=>{
    const comment= await Comment.findByIdAndRemove({_id: req.params.commentId,});
res.send({message:"content delete successfull"})
});


 //Replay

    //create a replay
    router.post("/:postId/comment/:commentId/replay", async(req,res)=>{
     //  find a comment 
      const commentreplay = await Comment.findOne({_id: req.params.commentId});

      //Create a replay
      const replay =new Replay();
      replay.content =req.body.content;
      replay.commentreplay =commentreplay._id;
      await replay.save();
  
      //Associate post with replay
      commentreplay.replays.push(replay._id);
      await commentreplay.save();
      res.send(replay);
        //res.send({ok:true});
    });
  
//find view by id get operation 
//replay view
router.get("/:postId/replay",async(req, res)=>{
    const post= await Post.findOne({_id: req.params.postId}).populate(
        "replays"
    );
    res.send(post);
});




module.exports= router;