
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import "../Css/ClubMessages.css";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    // Example: You can make an API request to fetch the book details for the given ID
    // For this example, I'm simulating book details fetching based on the ID
    const simulatedData = [
      {
        id: 1,
        title: "48 Laws of Power",
        author: "Robert Greene",
        description: "Self-Help Book",
        rating: 4.5,
      },
      {
        id: 2,
        title: "Things Fall Apart",
        author: "Chinua Achebe",
        description: "Narrative Book",
        rating: 3.5,
      },
    ];

    const selectedBook = simulatedData.find((b) => b.id === Number(id));

    if (selectedBook) {
      setBook(selectedBook);
    }
  }, [id]);

  if (!book) {
    return <div>Loading...</div>;
  }

  const handleReviewSubmit = () => {
    // Handle review submission logic here
  };

  const handleRatingSubmit = () => {
    // Handle rating submission logic here
  };

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <div className="book-info">
        <h3>Author</h3>
        <p>{book.author}</p>
      </div>
      <div className="book-info">
        <h3>Description</h3>
        <p>{book.description}</p>
      </div>
      <div className="book-info">
        <h3>Rating</h3>
        <StarRatings
          rating={book.rating}
          starRatedColor="#f7d83e"
          starDimension="20px"
          starSpacing="2px"
          numberOfStars={5}
          name="rating"
        />
      </div>
      <div className="book-info">
        <h3>Reviews</h3>
        <textarea rows="4" placeholder="Add a review..."></textarea>
        <button className="submit-button" onClick={handleReviewSubmit}>
          Submit Review
        </button>
      </div>
      <div className="book-info">
        <h3>Rate this Book</h3>
        <StarRatings
          rating={0} // Initial rating (0 stars)
          starRatedColor="#f7d83e"
          starHoverColor="#f7d83e"
          starEmptyColor="#ccc"
          starDimension="24px"
          starSpacing="2px"
          numberOfStars={5}
          name="rating"
        />
        <button className="submit-button" onClick={handleRatingSubmit}>
          Submit Rating
        </button>
      </div>
    </div>
  );
}

export default BookDetails;
