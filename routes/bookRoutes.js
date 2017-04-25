import express from 'express';
import bodyParser from 'body-parser';

class BookRouter {

	static bookRouter() {
		let booksArray = [
			{ id: '1', title: 'Book 1', author: 'Author 1' },
			{ id: '2', title: 'Book 2', author: 'Author 2' },
			{ id: '3', title: 'Book 3', author: 'Author 3' },
			{ id: '4', title: 'Book 4', author: 'Author 4' },
			{ id: '5', title: 'Book 5', author: 'Author 5' }];

		let bookRouter = express.Router();

		bookRouter.route('/')
			.post((req, res) => {
				let bodyRequest = req.body;

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

		bookRouter.use('/:bookid', (req, res, next) => {
			let book = booksArray.find(book => req.params.bookid == book.id);

			if(book) {
				req.book = book;
				next();
			} else
				res.status(404).send('no book found');
		});

		bookRouter.route('/:bookid')
			.get((req, res) => {
				if(req.params.bookid)
					res.json(req.book);
				else
					res.json(booksArray);
			})
			.put((req, res) => {
				let book = req.book;

				book.title = req.body.title;
				book.author = req.body.author;

				res.json(book);
			});

		return bookRouter;
	}
}

export { BookRouter as default };