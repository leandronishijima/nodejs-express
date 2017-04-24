import express from 'express';

const app = express();

app.use(express.static('public'));
app.use(express.static('src/views'));

const booksArray = [
	{ id: '1', title: 'Book 1', author: 'Author 1' },
	{ id: '2', title: 'Book 2', author: 'Author 2' },
	{ id: '3', title: 'Book 3', author: 'Author 3' },
	{ id: '4', title: 'Book 4', author: 'Author 4' },
	{ id: '5', title: 'Book 5', author: 'Author 5' }
];

const bookRouter = express.Router();

bookRouter.route('/books')
	.get((req, res) => {
		if(req.query.title)
			res.json(booksArray
					.filter(book => { 
						if(req.query.title == book.title) return book }));
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