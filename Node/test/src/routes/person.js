let express =require('express')
let app= express()
let router =express.Router()

//Querystring ==> query property on the request object
//localhost:3000/person?name=rajesh&age=30
router.get('/person', (req,res) => {
    if(req.query.name){
    res.send(`you have response ${req.query.name}`)

    }
    else{
        res.send('you have response')
    }
})


//params property on the request object
//localhost;3000/person/rajesh
router.get('/person/:name', (req,res) => {
    res.send(`you have response ${req.params.name}`)
})

//not working 500 error
router.get('person/error',(req,res)=>{
    throw new Error('This is a forced error')
})

module.exports =router