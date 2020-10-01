const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')


const restaurantsRouter = require('./routes/restaurants')
const IndexRouter = require('./routes')


const logger = require('./middleware/logger')

const app = express()

// template engines
app.engine('hbs', hbs({extname : 'hbs'}))
app.set('view engine', 'hbs')

// middlesware
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended : false}))

// custom middleware 
app.use(logger)


// routes
app.use('/api/restaurants', restaurantsRouter)
app.use('/', IndexRouter)


app.listen(3000, () => {
    console.log('listen port 3000')
})

module.exports = app