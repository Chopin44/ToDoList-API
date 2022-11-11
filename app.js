const express = require('express');
const app = express();
const allRouter = require('./routes')
const db = require('./config/config')

const PORT = 3000;
app.use(express.json())

db()

app.use(allRouter)
app.listen(PORT,  (err) => {
console.log("Server running on Port "+PORT);
})