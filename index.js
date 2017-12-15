import express from 'express'
import http from 'http'
import bodyparser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import socket from 'socket.io'
import Router from './app/router'

//Importing dotenv
dotenv.config()

var app = express()
var server = http.Server(app)
var io = socket(server);


app.get('/test', (req, res) => {
    res.send('hello');
})

app.use(Router)



server.listen(process.env.APP_PORT, () => {
    console.log('Listening on port ' + process.env.APP_PORT)
})
