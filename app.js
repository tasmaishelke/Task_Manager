const express = require('express');
const app = express();
const taskRoutes = require('./routes/tasksRoutes');
const connectDB = require('./database/connect');
require('dotenv').config()
const notFound = require('./middleware/notfounderror')
const port = process.env.PORT || 3000

//middleware
app.use(express.static('./public'))
app.use(express.json());

//routes
app.use('/api/v1/tasks', taskRoutes);
app.use(notFound)

const start = async () =>
{
    try 
    {
        await connectDB(process.env.MONGO_URI)
        console.log("Connected to database")
        app.listen(port, console.log(`server is listening on port ${port}`));
    } 
    catch(error) 
    {
        console.log(error)
    }
}

start()