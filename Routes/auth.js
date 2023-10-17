const express = require('express')
const router =  express.Router()

// controllers
const {createAndUpdateUser, currentUser} = require('../controllers/authController');
const { authcheck } = require('../Middleware/authChack');

// Endpoint http://localhost:5000/api/auth/
router.post('/auth',authcheck,createAndUpdateUser)
router.post('/current-user',authcheck,currentUser)
module.exports= router;