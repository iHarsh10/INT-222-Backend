const express = require('express')
const cookieParser = require('cookie-parser')
const cookieValidator = require('./cookieValidator')
const app = express();
async function validateCookies(req , res , next){
    await cookieValidator(req.cookies)
    next();
}

app.use(cookieParser())
app.use(validateCookies)
app.use((err, req, res, next) => {
    res.status(400).send(err.message)
})
app.listen(3002)