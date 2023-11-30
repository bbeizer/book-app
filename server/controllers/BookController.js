// BookController.js
const Book = require('../models/book');

const BookController = {

  createBook: async (req, res) => {
    try {
      const { title, author, genre, publicationDate } = req.body;
      
      const book = await Book.create({ title, author, genre, publicationDate });
      res.status(201).json(book);
    } catch (error) {
      console.error('Error creating book:', error);
      res.status(500).json({ error: 'Failed to create book' });
    }
  },

  getAllBooks: async (req, res) => {
    try {
      const books = await Book.findAll();
      res.status(200).json(books);
    } catch (error) {
      console.error('Error getting books:', error);
      res.status(500).json({ error: 'Failed to get books' });
    }
  },

  getBookById: async (req, res) => {
    try {
      const { id } = req.params;
      const book = await Book.findById(id);

      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }
      
      res.status(200).json(book);
    } catch (error) {
      console.error('Error getting book:', error);
      res.status(500).json({ error: 'Failed to get book' });
    }
  },

  updateBook: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, author, genre, publicationDate } = req.body;

      const updatedBook = await Book.update(id, { title, author, genre, publicationDate });
      
      if (!updatedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
      
      res.status(200).json(updatedBook);
    } catch (error) {
      console.error('Error updating book:', error);
      res.status(500).json({ error: 'Failed to update book' });
    }
  },

  deleteBook: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedBook = await Book.delete(id);

      if (!deletedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
      
      res.status(200).json(deletedBook);
    } catch (error) {
      console.error('Error deleting book:', error);
      res.status(500).json({ error: 'Failed to delete book' });
    }
  }
};

module.exports = BookController;
