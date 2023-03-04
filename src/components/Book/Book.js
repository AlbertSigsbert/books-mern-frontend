import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Book(props) {
    const {bookId} = useParams();
    const [book, setBook] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchBookData(bookId) {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`http://localhost:4000/api/books/${bookId}`);
        if (!response.ok) {
          throw new Error("Something went wrong fetching book data");
        }
        const result = await response.json();
        setBook(result);
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    }

    useEffect(()=> {
      fetchBookData(bookId)
    },[bookId]);

    if (isLoading) {
      return <p>Loading...</p>;
    }
  
    if (error) {
      return <p>{error}</p>;
    }
  
    return (
        <div className="max-w-7xl mx-auto my-24">
        {book && (
          <div>
            <p>Name: {book.title}</p>
            <p>Price: {book.price}</p>
          </div>
        )}
      </div>
    );
}

export default Book;