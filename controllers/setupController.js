var Todos = require('../models/todoModel');

module.exports = function(app) {

    // setup todo api
    app.get('/api/setup/todos', function(req, res) {

        // seed database
        var starterTodos = [
            {
                username: 'test',
                todo: 'Buy eags',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Go for shopping',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'ashraf',
                todo: 'Meet with kaka',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'ashraf',
                todo: 'Go for walk',
                isDone: false,
                hasAttachment: false
            }
        ];

        Todos.create(starterTodos, function(err, results) {
            
            if(err) throw err;
            res.send(results);
        });
    });
};