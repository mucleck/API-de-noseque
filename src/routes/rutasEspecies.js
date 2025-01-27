const express = require('express')
const especiesController = require('../controllers/especies')

const router = express.Router()

router.get('/especies', especiesController.get_especies)
router.post('/', especiesController.post_especies)
module.exports = router;