const express = require('express');
const app = express();
const PORT = 5000;
var cors = require('cors');
var { initializeConnection } =require('../Backend/Connection/connection.js');
var productApi = require('./Routes/ProductsRouteApi.js')
app.use(cors);

initializeConnection();
// Intialize a connection


// app.use('/products',productApi);

app.get('/',(req,res)=>{
    res.json({hello:"world"})
})



app.listen(PORT,()=>console.log('Successfully started server'))

