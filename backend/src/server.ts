import express from 'express'
import  './index'
import routes from './controllers/routes'

const app = express()

app.use(express.json())

app.listen(3333)

app.use(routes)



