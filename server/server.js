const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('Hello Sourabh!');
});

app.get('/unknown', (req, res) => {
    res.status(404)
    .send({
        error: 'Page not found.',
        name: 'Unknown page'
    });
});

app.get('/users', (req, res) => {
    res.send([{
        name: 'Mike',
        age: 27
    }, {
        name: 'Sourabh',
        age: 30
    }, {
        name: 'Jen',
        age: 25
    }]);
})

app.listen(3000);

module.exports.app = app;