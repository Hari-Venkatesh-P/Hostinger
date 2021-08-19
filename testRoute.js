const router = require('express').Router()
const testService = require('./testService')

router.get("/",testService.testFunction)


module.exports = router;