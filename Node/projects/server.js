const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser =require('body-parser')
const app = express();
const cloudinary =require('cloudinary')

const upload= require('./handlers/multer')

require('dotenv').config()
require('./handlers/cloudinary')




app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.json()).use(bodyParser.urlencoded({extended:true}))

app.get('/', (req, res) => {
    res.render("index")
})

app.get('/about', (req, res) => {
    res.render("about")
})

app.post('/create_blog', upload.single("image"),async(req, res)=>{
   const result = await cloudinary.v2.uploader.upload(req.file.path)
   res.send(result)
})
 const PORT=7779
app.listen(PORT, () => {
    console.log(`server is running ${PORT}`)
})