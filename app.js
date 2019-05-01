const express = require('express');
const path = require('path');
const app = express();


let tasks = require('./data/tasks');


// app.get('/', (req,res) => {
//         // res.send('<h1>Pavan</h1>');
//         res.sendFile(path.join(__dirname, './public/index.html'));
// });
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.get('/task-list', (req, res) => {
    res.render('task-list', {
        title : 'Technologies',
        taskItems: tasks
    });
});

app.get('/get-random-tasks', (req, res) => {
    const randomtasks = tasks[Math.floor(Math.random() * tasks.length)];
    res.send(randomtasks);
});

module.exports = app;