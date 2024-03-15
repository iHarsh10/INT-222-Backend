const express = require('express')
const app = express();
const requestTime = function(req , res , next){
    req.requestTime = Date.now()
    next();
}
app.use(requestTime);
app.get('/', (req, res) => {
    let responseText = 'Hello World!<br>';
    responseText += `<small>Request at: ${req.requestTime}</small>`
    res.send(responseText)
})
app.listen(3001)

async function cookieValidator (cookies){
    try {
        await externallyValidateCookie(cookies.testCookie)
    }catch{
        throw new Error('Invalid cookies');
    }
}