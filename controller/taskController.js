const taskSchema = require('../models/task');

const AllTasks = async (req, res) =>
{
    try
    {
        const tasks = await taskSchema.find({})
        res.status(200).json({tasks})
    }
    catch(error)
    {
        res.status(500).json({error})
    }
}

const createTask = async (req, res) =>
{
    try
    {
        const task = await taskSchema.create(req.body)
        res.status(200).json({task})
    }
    catch(error)
    {
        res.status(500).json({error})
    }
}

const getTask = async (req, res) =>
{
    try
    {
        const taskID = req.params.id
        const task = await taskSchema.findOne({_id : taskID})
        if(!task)
        {
            res.status(404).json({ msg : `No task with id : ${taskID}`})
        }
        else
        {
            res.status(200).json({task})
        }
    }
    catch(error)
    {
        res.status(500).json({error})
    }
}

const updateTask = async (req, res) =>
{
    try
    {
        const taskID = req.params.id
        const task = await taskSchema.findOneAndUpdate({_id : taskID}, req.body,
            {
                new : true,
                runValidators : true,
            })
        if(!task)
        {
            return res.status(404).json({msg : `No task with id : ${taskID}`})
        }
        res.status(200).json({task})

    }
    catch(error)
    {
        res.status(500).json({error})
    }
}

const deleteTask = async (req, res) =>
{
    try
    {
        const taskID = req.params.id
        const task = await taskSchema.findOneAndDelete({_id : taskID})
        if(!task)
        {
            return res.status(404).json({msg : `No task with id : ${taskID}`})
        }               
        res.status(200).json({task})
    }
    catch(error)
    {
        res.status(500).json({error})
    }    
}


module.exports =
{
    AllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}