import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Css/ClubMessages.css";

function ClubMessages() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    description: "",
  });

  const addBook = () => {
    if (newBook.title && newBook.author && newBook.description) {
      //Add the API request to handle adding the new book
    }
  };

  useEffect(() => {
    //Make an API request to fetch the list of books here
    //e.g fetchBooksFromAPI().then(data => setBooks(data));

    // Example, I'm simulating data fetching
    const simulatedData = [
      {
        id: 1,
        title: "48 Laws of Power",
        author: "Robert Greene",
        description: "Self-Help Book",
      },
      {
        id: 2,
        title: "Things Fall Apart",
        author: "Chinua Achebe",
        description: "Narrative Book",
      },
    ];

    setBooks(simulatedData);
  }, []);

  return (
    <div className="club-messages">
      <h1>Book Database</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Book Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newBook.description}
          onChange={(e) =>
            setNewBook({ ...newBook, description: e.target.value })
          }
        />
        <button onClick={addBook}>Add Book</button>
      </div>
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Description: {book.description}</p>
            <Link to={`/book/${book.id}`}>
              <button>More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClubMessages;
