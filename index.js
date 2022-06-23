require('dotenv').config()
const express = require('express')
const router = require('./src/routes')
const app = express()
const port = 5000;


app.use(express.json())


app.use('/api/v1/', router)
app.use('/uploads', express.static('uploads'))



app.listen(port, () => {
    console.log(`server listening on port ${port}`)
});