
const express = require('express') //import express

const app = express() // associate the express methods to a variable

const port = 5000 //create the variable port

let date = new Date();
let D = date.getDay();
let H = date.getHours();

const testMiddlaware = (req, res, next) => {
    if (D !== 0 && D !== 6 && H >= 9 && H <= 17)
        next()
    else
        res.redirect('/horsservice.html')
}
app.get('/horsservice.html', (req, res) => {
    res.sendFile(__dirname + '/public/horsservice.html')
})
app.use(testMiddlaware)
app.use('/', require('./route'))
//app.use(express.static('public'))

/*app.get('/', (req, res) => {
    res.send('hello world')
})*/


//listen to the port
app.listen(5000, (err) => {
    err ? console.log(err) : console.log(`the server is running on port ${5000}`)
})

app.use('/user/:id', function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
});
