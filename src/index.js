import express from 'express';
import BookRouter from '../routes/bookRoutes.js';
import bodyParser from 'body-parser';
import Book from '../src/models/Book.js';

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use('/api/books', BookRouter.bookRouter());

const port = 3000;

app.listen(port, () => {
	console.log('Running server on port ' + port);
});