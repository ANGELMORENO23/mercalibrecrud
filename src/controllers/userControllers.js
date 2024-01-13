const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');

const usercontrollers = {
    login: function (req, res) {
        res.render("users/login", { title: "login" });
    },
    processlogin:(req,res)=> {
    let errors = validationResult(req);
    const {email} = req.body;
    const dir = path.join(__dirname, '../data/users.json')
    let products = JSON.parse(fs.readFileSync(dir,'utf-8'));
    const user = products.find(usuario => usuario.email == email);
    if (user) {
        req.session.user = user;
        res.cookie('email',user.email,{maxAge: 1000 * 60 });;
        console.log("session:",req.session);
        res.redirect('/');
    
} else {
    res.render('users/login', { errors: errors.mapped(), old: req.body });
}

    },
    register: function (req, res) {
        res.render("users/register", { title: "register" });
    },
    createUser:(req,res)=> {
        
        let errors = validationResult(req);
if (errors.isEmpty()) {
    console.log(req.body);
    const dir = path.join(__dirname, '../data/users.json')
    let products = JSON.parse(fs.readFileSync(dir,'utf-8'));
    products.push(req.body);
    let nuevoArray = JSON.stringify(products);
    fs.writeFileSync(dir,nuevoArray,"utf-8");
    res.redirect("/" )
} else {
    res.render('users/register', { errors: errors.mapped(), old: req.body });
}


},

};



module.exports = usercontrollers;