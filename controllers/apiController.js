var Todos = require('../models/todoModel');
var bodyParser = require('body-parser');

module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    //////// ALL API

    // Get all todo list by a user name
    app.get('/api/todos/users/:username', function (req, res) {

        Todos.find({ username: req.params.username }, function (err, todos) {
            if (err) throw err;

            res.send(todos);
        });
    });

    // create a new todo
    app.post('/api/todos', function (req, res) {

        var todo = Todos({
            username: 'ashraf',
            todo: req.body.todo,
            isDone: req.body.isDone,
            hasAttachment: req.body.hasAttachment
        });

        todo.save(function (err) {
            if (err) throw err;
            res.send('Success');
        });
    });

    // Get a todo by id
    app.get('/api/todos/:id', function (req, res) {

        Todos.findById({ _id: req.params.id }, function (err, todo) {
            if (err) throw err;
            res.send(todo);
        });
    });

    // update a todo
    app.put('/api/todos/:id', function (req, res) {

        Todos.findByIdAndUpdate(req.params.id, {
            todo: req.body.todo,
            isDone: req.body.isDone,
            hasAttachment: req.body.hasAttachment
        }, function (err, todo) {
            if (err) throw err;
            res.send(todo);
        });
    });

    // delete a todo by id
    app.delete('/api/todos/:id', function (req, res) {

        Todos.findByIdAndRemove(req.params.id, function (err) {
            if (err) throw err;
            res.send("Success");
        });
    });
};