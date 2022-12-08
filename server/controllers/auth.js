const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { verifyToken, TOKEN_SECRET } = require('../middleware/validate-jwt');
const db = require('../models/index');


router.post('/login', async (req, res) => {
    const User = db.User
    const checkedUser = await User.findOne({ where: {email: req.body.email }})

    if (!checkedUser) {
        return res.status(402).send({ message: 'Usuario no válido' })
    }

    const validPassword = await bcrypt.compare(req.body.password, checkedUser.password)

    if (!validPassword) {
        return res.status(401).send({ message: 'Contraseña no válida' })
    }else {
        const token = jwt.sign({
            email: checkedUser.email
        }, TOKEN_SECRET)

        res.send({ message: 'Login exitoso', token })

    }
})


router.get('/', verifyToken, async (req, res, next) => {
    try {
        res.send('Bienvenido a la Pokedex ' + req.body.email)
    } catch (err) {
        console.log('error de auth')
        next(err)
    }
})


router.post('/register', async (req, res) => {
    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(req.body.password, salt)
    const user = db.User
    
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: password
    }
    await user.create(newUser)
    .then((data) => {res.send({ success: true, newUser })})
    .catch(err => {res.status(500).send({ message: err.message })})
})

module.exports = router;


