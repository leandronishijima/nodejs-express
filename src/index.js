import express from 'express';

const app = express();

const port = 3000;

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', function(req, res) {
	res.send('Hello World!');
});

app.get('/books', function(req, res) {
	res.send('Hello Books!');
});

app.listen(port, function(err) {
	console.log('Running server on port ' + port);
});