const express = require('express')
const controllers = require('./controllers')
const port = 3000;

const app = express()

app.use(express.json())
app.use(controllers);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})