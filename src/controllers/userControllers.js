const path = require('path');
const fs = require('fs');


const usercontrollers = {
    login: function (req, res) {
        res.render("users/login", { title: "login" });
    },
    register: function (req, res) {
        res.render("users/register", { title: "register" });
    },
    createUser:(req,res)=> {
        const { validationResult } = require('express-validator');
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