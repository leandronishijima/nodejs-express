import express from 'express';
import bodyParser from 'body-parser';
import Book from '../src/models/Book.js';

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

const booksArray = [
	{ id: '1', title: 'Book 1', author: 'Author 1' },
	{ id: '2', title: 'Book 2', author: 'Author 2' },
	{ id: '3', title: 'Book 3', author: 'Author 3' },
	{ id: '4', title: 'Book 4', author: 'Author 4' },
	{ id: '5', title: 'Book 5', author: 'Author 5' }
];

const bookRouter = express.Router();

bookRouter.route('/books')
	.post((req, res) => {
		let bodyRequest = req.body;

		console.log(bodyRequest);
		booksArray.push(bodyRequest);

		res.json(bodyRequest);
	})
	.get((req, res) => {
		if(req.query.title)
			res.json(booksArray
						.filter(book => req.query.title == book.title));
		else
			res.json(booksArray);
	});

bookRouter.route('/books/:bookid')
	.get((req, res) => {
		if(req.params.bookid)
			res.json(booksArray
						.find(book => req.params.bookid == book.id));
		else
			res.json(booksArray);
	});

app.use('/api', bookRouter);

app.get('/', (req, res) => {
	res.send('Hello World!');
});

const port = 3000;

app.listen(port, () => {
	console.log('Running server on port ' + port);
});