const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

//Import Routes
const subcRoutes = require('./routes/subscribe.js');

const contactRoutes = require('./routes/contactus.js');

//connecting to database
mongoose.connect(process.env.DB_CONNECTION,
{useNewUrlParser:true},
()=>console.log(`succefully connected to database`));
//middleware
app.use(express.json());
//route middleware
app.use('/api1', subcRoutes, contactRoutes)

// Usually PORT is a string in most environment variables. So it's a good practise to have a type casting mechanism which is negected when not required.
app.listen(Number(process.env.PORT), ()=>console.log(`server is running at ${process.env.PORT}`));

