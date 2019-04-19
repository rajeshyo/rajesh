let express =require('express')
let app= express()
let personRouter=require('./routes/person')

//
app.use((req ,res ,next)=>{
    console.log(`${new Date().toString()}=>${req.originalUrl}`)
    next()
})

app.use(personRouter)
app.use(express.static('public'))

//Handeler for 404 not found
app.use((req, res ,next) => {
res.status(404).send('WE think you are lost')
})

//Handeler for Error 500
//not working 
app.use((err,req,res,next) => {
    console.error(err.stack)
    res.sendFile(path.join(__dirname,'../public/500.html'))
    
}) 
const PORT= process.env.PORT || 3000
app.listen(PORT,() => console.info(`server is running ${PORT}`))