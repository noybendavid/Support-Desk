//Bring in express
const express = require('express')

const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const colors = require('colors')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000

//Connect to database
connectDB()

//Initialize app
const app = express()

app.use(express.json())

//body parsser
app.use(express.urlencoded({ extended: false }))

//create route with express
app.get('/', (req, res) => {
	res.status(200).json({ message: 'Welcome to the Support Desk API' })
})

//Routes
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
