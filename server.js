import express from 'express'
import logger from 'morgan'
import router from './app/routes/routes'
import {
    urlencoded,
    json
} from 'body-parser'

const app = express()
var port = process.env.PORT || 3000

app.use(logger('dev'))
app.use(json())
app.use(urlencoded({
    extended: true
}))

app.get('/', (resquest, response) => {
    response.json({
        info: "NodeJs, ExpressJS, and PosgreSQL API"
    })
})

app.use('/api/', router)

app.listen(port, () => {
    console.log('Server is listening in port ' + port)
})

export default app