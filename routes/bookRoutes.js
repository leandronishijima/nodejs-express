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

		bookRouter.route('/:bookid')
			.get((req, res) => {
				if(req.params.bookid)
					res.json(booksArray
								.find(book => req.params.bookid == book.id));
				else
					res.json(booksArray);
			})
			.put((req, res) => {
				let book = booksArray.find(book => req.params.bookid == book.id);

				console.log(book);

				book.title = req.body.title;
				book.author = req.body.author;

				res.json(book);
			});

		return bookRouter;
	}
}

export { BookRouter as default };