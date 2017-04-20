import express from 'express';

const app = express();

app.use(express.static('public'));
app.use(express.static('src/views'));

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/books', (req, res) => {
	res.send('Hello Books!');
});

const port = 3000;

app.listen(port, () => {
	console.log('Running server on port ' + port);
});