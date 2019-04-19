const mongoose =require("mongoose");

const comment_schema = new mongoose.Schema({
    content : {
    type: String,
    // required :"comment is required"
    },
    repl : [{
        type: String,
        
        }],
    post :{
        type :mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required :"post is required"
    }
});

module.exports = mongoose.model("Comment",comment_schema);