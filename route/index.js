const router = require('express').Router()
const { dirname } = require('path');

console.log(require('path').dirname(__dirname))


router.get('/contact.html', (req, res) => {
    res.sendFile(require('path').dirname(__dirname) + '/public/contact.html')
})
router.get('/index.html', (req, res) => {
    res.sendFile(require('path').dirname(__dirname) + '/public/index.html')
})
router.get('/services.html', (req, res) => {
    res.sendFile(require('path').dirname(__dirname) + '/public/services.html')
})

module.exports = router