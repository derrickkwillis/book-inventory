// src/pages/index.js

import { useState } from 'react';
import AddBookForm from '../components/AddBookForm';

export default function Home() {
  const [books, setBooks] = useState([]);

  const handleAddBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', color: '#333' }}>Book Inventory Management</h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>
        Welcome to the Book Inventory Management System. Start adding and managing your book collection!
      </p>

      {/* Add Book Form */}
      <AddBookForm onAddBook={handleAddBook} />

      {/* Displaying the list of books */}
      <div style={{ marginTop: '20px' }}>
        <h2 style={{ fontSize: '1.5rem', color: '#333' }}>Books List</h2>
        <ul>
          {books.map((book, index) => (
            <li key={index} style={{ marginBottom: '10px', fontSize: '1rem', color: '#333' }}>
              {book.title} by {book.author} (Genre: {book.genre}, Published: {book.publicationDate}, ISBN: {book.isbn})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
