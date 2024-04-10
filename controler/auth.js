const cookie = require("cookie-parser")
const bcrypt = require('bcrypt');
const User = require('../model/user');
const jwt = require('jsonwebtoken');


// async function getHome(req, res) {
//     const {name, email} = req.cookies.user; // to use data from cookies 
//     res.render('home', {name, email}); // Pass the user object to the home template
// }

async function getHome(req, res){
    // const {name, email} = req.session.user; //for session
    const userId = req.userId;
    const user = await User.findById(userId);

    if(!user){
        return res.status(404).json({err:"user not found"});
    }
    const {name, email} = user;
    res.render('home',{name,email})
}

async function getSignUp(req, res) {
    res.render('signup');
}

async function getLogIn(req, res) {
    res.render('login');
}

async function postSignUp(req, res) {
    try {
        const body = req.body;
        if (!body || !body.name || !body.email || !body.password) return res.status(400).json({ msg: "All fields are mandatory" });

        const hashedPassword = await bcrypt.hash(body.password, 10);
        await User.create({
            name: body.name,
            email: body.email,
            password: hashedPassword
        });
        res.render('login'); // Render the login page after successful signup
    } catch (error) {
        return res.status(500).json({ msg: `An error occurred: ${error}` });
    }
}

async function postLogIn(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ err: "User not found" });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            // res.cookie('user', user);
            // req.session.user = user;

            const token = jwt.sign({userId : user._id}, 'my secret key', {expiresIn:'10s'});
            res.cookie('token',token,{httpOnly:true});
            res.redirect('/home'); // Pass the user object to getHome function
        } else {
            res.status(400).json({ err: "Invalid credentials" });
        }
    } catch (error) {
        return res.status(500).json({ msg: `An error occurred: ${error}` });
    }
}

module.exports = {
    getSignUp,
    getLogIn,
    postLogIn,
    postSignUp,
    getHome,
};
