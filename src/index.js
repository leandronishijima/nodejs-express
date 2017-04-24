import express from 'express';
import BookRouter from '../routes/bookRoutes.js';
import Book from '../src/models/Book.js';

const app = express();

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.use('/api', BookRouter.bookRouter());

const port = 3000;

app.listen(port, () => {
	console.log(`Running server on port #{port}`);
});