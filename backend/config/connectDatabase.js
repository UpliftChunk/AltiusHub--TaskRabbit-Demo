const mongoose = require('mongoose');

const connected = () => {console.log('Connected to mongodb');};
const notConnected = () => {console.log('Not Connected to mongodb');};
const connectDatabase = async()=>{
   await mongoose.connect('mongodb://127.0.0.1:27017/TaskRabbit').then(connected, notConnected);
} 
module.exports = connectDatabase;