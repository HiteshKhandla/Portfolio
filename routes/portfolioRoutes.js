const express =require('express')
const { sendEmailCOntroller } = require('../controller/portfolioController')

//routes object
const router= express.Router()

//routes
router.post('/sendEmail ', sendEmailCOntroller)

// export
module.exports =router