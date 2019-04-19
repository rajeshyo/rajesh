const mongoose =require('mongoose')

const Contact_Schema = mongoose.Schema({
    first_name:{
        type:String,
        require:true
    },
    last_name:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    }

})

const Contact = module.exports = mongoose.model('Contact',Contact_Schema);