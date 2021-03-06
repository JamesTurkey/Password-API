const rateLimit = require("express-rate-limit");
const fetch = require('node-fetch')
const express = require("express")
const app = express()

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 1000
});

app.use(limiter);

app.listen(3000, () => {
    console.log("API ON | Listening to port 3000")
})
app.get('/', async (req, res) => {

    function getPass(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    res.send(JSON.stringify({
        "Password": getPass(16)
    }))
})

