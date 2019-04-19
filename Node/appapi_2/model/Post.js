const  mongooes= require("mongoose");

const post_schema = mongooes.Schema({
    title:{
        type:String,
        required:true
    },

    content:{
        type:String,
        required:true
    },
    comments:[
        {
            type:mongooes.Schema.Types.ObjectId,
            ref:"Comment",
            required:"comment is required"
        }
    ],
    
    reps:[
        {
            type:mongooes.Schema.Types.ObjectId,
            ref:"Comment",
            required:"Comment is required"
        }
    ]
})


module.exports=mongooes.model("Post", post_schema)