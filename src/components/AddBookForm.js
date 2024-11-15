// src/components/AddBookForm.js

import { useState } from 'react';

export default function AddBookForm({ onAddBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [isbn, setIsbn] = useState('');

  const handleAddBook = (e) => {
    e.preventDefault();
    if (!title || !author || !genre || !publicationDate || !isbn) {
      alert("Please fill in all fields.");
      return;
    }
    onAddBook({ title, author, genre, publicationDate, isbn });
    setTitle('');
    setAuthor('');
    setGenre('');
    setPublicationDate('');
    setIsbn('');
  };

  return (
    <form onSubmit={handleAddBook} style={{ marginTop: '20px', maxWidth: '400px' }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#333', marginBottom: '20px' }}>Add a New Book</h2>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', fontWeight: '500', marginBottom: '5px' }}>Title:</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            fontSize: '1rem'
          }}
        />
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', fontWeight: '500', marginBottom: '5px' }}>Author:</label>
        <input 
          type="text" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            fontSize: '1rem'
          }}
        />
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', fontWeight: '500', marginBottom: '5px' }}>Genre:</label>
        <input 
          type="text" 
          value={genre} 
          onChange={(e) => setGenre(e.target.value)} 
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            fontSize: '1rem'
          }}
        />
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <label style={{ display: 'block', fontWeight: '500', marginBottom: '5px' }}>Publication Date:</label>
        <input 
          type="date" 
          value={publicationDate} 
          onChange={(e) => setPublicationDate(e.target.value)} 
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            fontSize: '1rem'
          }}
        />
      </div>
      
      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', fontWeight: '500', marginBottom: '5px' }}>ISBN:</label>
        <input 
          type="text" 
          value={isbn} 
          onChange={(e) => setIsbn(e.target.value)} 
          style={{
            width: '100%',
            padding: '10px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
            fontSize: '1rem'
          }}
        />
      </div>

      <button 
        type="submit" 
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
        }}
      >
        Add Book
      </button>
    </form>
  );
}
