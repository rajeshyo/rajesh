const mongoose =require("mongoose");

const postt_schem = new mongoose.Schema({
    content : {
    type: String,
    required :"post is required"
    }
    // post :{
    //     type :mongoose.Schema.Types.ObjectId,
    //     ref: "Post",
    //     required :"post is required"
    // }
});

module.exports = mongoose.model("Post2",postt_schem);