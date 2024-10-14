const express = require('express');
const app = express();
const cors = require('cors');

// allows requests from other ports or machines. cors options can be set to restrict requests
app.use(cors()); 

// config database and .env variables
const dotenv = require('dotenv');
dotenv.config({path: "./config/.env"});

const connectDatabase = require('./config/connectDatabase.js');
connectDatabase();

app.use(express.json())

// set routes
const userDataRouter = require('./routes/userDataRouter.js');
// const taskDataRouter = require('./routes/taskDataRouter.js');

app.use(userDataRouter);
// app.use(taskDataRouter);

const MACHINE = process.env.MACHINE || "localhost";
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
   console.log(`Server listening on http://${MACHINE}:${PORT}`);   
})