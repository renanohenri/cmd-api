const express = require('express');
const cors = require('cors');

const app = express()

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    app.use(cors())
    next();
});

app.options("*", cors())
app.use(express.json());
app.use('/', require('./scr/routes/router'));


app.listen(3000, ()=>{
    console.log('Aplicação rodando na porta 3000')
})


