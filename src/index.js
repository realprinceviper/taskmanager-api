const express = require('express');
const app = express();
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const port = process.env.PORT || 3000

app.use(express.json())

//User endpoints
app.use(userRouter)

//Task endpoints
app.use(taskRouter)

//using call backs

/* app.get('/users', (req, res) => {
    User.find({}).then((user) => {
        res.send(user);
    }).catch((error)=> {
        res.status(500).send();
    })
})

app.get('/users/:id', (req, res)=> {
    const _id = req.params.id;
    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send();
        }

        res.send(user);

    }).catch((error)=> {
        res.status(500).send(error);
    })
})

app.post('/users', (req, res)=> {
    const user = new User(req.body);

    user.save().then(()=> {
        res.status(201).send(user);
    }).catch((error) => {
        res.status(400).send(error);
    })
})

app.get('/tasks', (req, res)=> {
    Task.find({}).then((task)=> {
        res.send(task);
    }).catch((error)=> {
        res.status(500).send();
    })
})

app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id;
    Task.findById(_id).then((task)=> {
        if (!task) {
            return res.status(404).send();
        }
        res.send(task);
    }).catch((error)=> {
        res.status(500).send();
    })
})

app.post('/tasks', (req, res) => {
    const task = new Task(req.body);
    task.save().then(() => {
        res.status(201).send(task);
    }).catch((error) => {
        res.status(400).send(error);
    })
})

*/


app.listen(port, ()=> {
    console.log('Server is up on port ', port);
});