const express = require('express')
const pool = require('./db')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 4000 

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Denim University API')
})

app.get('/jeans', async (req, res) => {
    try{
        const result = await pool.query('SELECT * FROM jeans')
        res.json(result.rows)
    } catch (err) {
        console.error('Error fetching jeans', err.message)
        res.status(500).send('Server error')
    }
} )

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})