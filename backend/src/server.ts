import express from 'express'
import  './index'
import routes from './controllers/routes'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.listen(3333)

app.use(routes)




