const express = require('express')
const usuariosController  = require('../controllers/users')

const router = express.Router()
router.get('/all_users', usuariosController.get_all_users)

module.exports = router;