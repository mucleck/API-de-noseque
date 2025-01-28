const express = require('express')
const loginRutas  = require('../controllers/login')

const router = express.Router()

router.get('/', loginRutas.login)

module.exports = router;