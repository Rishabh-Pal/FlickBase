const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();


const users = require('./routes/api/users');
const articles = require('./routes/api/articles');
const { checkToken } = require('./middleware/auth');


const mongoUri = `mongodb+srv://flickproject:flickproject@cluster0.e9cire5.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})


app.use(bodyParser.json())
app.use(checkToken)
app.use("/api/users",users)
app.use("/api/articles",articles)

const port = process.env.PORT || 3002;
app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})