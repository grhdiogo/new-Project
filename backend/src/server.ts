import express from 'express'
import  './index'
import routes from './controllers/routes'
import session from 'express-session'
import flash from 'connect-flash'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

import Client from '../src/models/Client'
import loginController from './controllers/loginController'

const app = express()

declare module 'express-session' {
    interface SessionData {
        loggedIn: boolean,
        client:Client,
    }
}

app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST"],
    credentials:true
}))

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))
app.listen(3333)


app.use(session({
    secret:'jarbas',
    resave:false,
    saveUninitialized:true,
}))

app.use(routes)








