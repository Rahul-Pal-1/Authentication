const express = require("express");
const {conn} = require('./connection')
const userRouter = require('./Router/user')
const authRouter = require('./Router/auth')
const path = require('path');
// const session = require("express-session");
const authenticateToken = require("./middlewares/jwtauth");
const cookieParser = require("cookie-parser");  // to store and retrive cookie value;



const app = express();
app.use(cookieParser()) 
// app.use(session({
//     secret:'keep it hidden',
//     resave:false,
//     saveUninitialized:true,
// }))

// middlewares

//set ejs view engine
app.set('view engine', 'ejs');

//set directory for view
app.set('views', path.join(__dirname, 'View'));

//serve static file form public directory
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 8002;
app.use(express.urlencoded({extended:false}));

conn()
.then(()=>console.log("connected successfully"))
.catch((error)=>console.log(error));

app.use('/user', userRouter)
app.use('/', authRouter);


app.listen(PORT, ()=>{console.log(`Server listen at port : ${PORT}`)});