const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const cors = require("cors")
const bodyParser = require("body-parser");
require('dotenv').config(); 


const users = require('./routes/api/users');
const articles = require('./routes/api/articles');
const { checkToken } = require('./middleware/auth');


const mongoUri = `mongodb+srv://rishabhpal15092000:HplE6E8DbGuttMVF@cluster0.gc6kana.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(mongoUri,{ 
}).then( console.log('DB is connected.'))


app.use(bodyParser.json())
app.use(cors())
app.use(checkToken)
app.use("/api/users",users)
app.use("/api/articles",articles)

const port = process.env.PORT || 3002;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})