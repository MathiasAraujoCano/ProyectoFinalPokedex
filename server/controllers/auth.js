const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { verifyToken, TOKEN_SECRET } = require('../middleware/validate-jwt');
const db = require('../models/index');


router.post('/login', async (req, res) => {
    const User = db.User
    const checkedUser = await User.findOne({ where: {Email: req.body.Email }})

    if (!checkedUser) {
        return res.status(402).send({ message: 'Usuario no válido' })
    }

    const validPassword = await bcrypt.compare(req.body.Password, checkedUser.Password)

    if (!validPassword) {
        return res.status(401).send({ message: 'Contraseña no válida' })
    }else {
        const token = jwt.sign({
            Email: checkedUser.Email
        }, TOKEN_SECRET)

        res.send({ message: 'Login exitoso', token })

    }
})

module.exports = router;