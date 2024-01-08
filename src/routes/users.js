const express = require('express');
const router = express.Router();
const {login,register,createUser} = require("../controllers/userControllers");
const { check } = require('express-validator');

const validateRegister = [
    check('nombre').notEmpty().withMessage('Debes completar el nombre'),
    check('apellido').notEmpty().withMessage('Debes completar el apellido'),
    check('email').notEmpty().withMessage('Debes completar el email'),
    check('contraseña').notEmpty().withMessage('Debes completar la contraseña')
    ]


router.get('/login', login);
router.get('/register', register);
router.post('/register' ,validateRegister,createUser);

module.exports = router;


