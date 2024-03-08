
const mysqlPool = require('./database.js')
const express = require('express')
const app = express();
app.use(express.json());

const routes = require('./routes/routes.js')
const db = require('./database.js')
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`The server is running on ${PORT}`);
})
app.use('/api/users',routes);


