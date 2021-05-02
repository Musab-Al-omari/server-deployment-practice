'use strict'

//  require('dotenv').config()
const express = require('express')
const app = express()
const errorFound=require('./handlers/500.js')
const notFound=require('./handlers/404.js')

// const PORT=process.env.PORT || 3000



//routs
app.get('/', homeHandler)
app.get('/info', infoHandler)
app.get('/bad-request', badRequestHandler)
app.get('/bad-request2', badRequestTowHandler)
app.use( errorFound.errorFound)
app.use('*', notFound.notFound)
function homeHandler(request, response) {
    response.send('hello world my name is musab')
}
function infoHandler(request, response) {
    response.json({
        name: 'mosab',
        age: '99'
    })
}
function badRequestHandler(request, response) {
    throw new Error('manual error')
}
function badRequestTowHandler(request, response) {
    let G=10
   G.push('11')
}

  































function start(PORT) {
    app.listen(PORT, () => {
        console.log(`YOU CAN FIND ME ON ${PORT}`);
    })
}





module.exports = {
    app: app,
    start: start

}