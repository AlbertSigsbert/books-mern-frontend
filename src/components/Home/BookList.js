import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination";

function BookList() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [pages, setPages] = useState(1);

  const fetchBooks = useCallback(
    async (page) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `http://localhost:4000/api/books?page=${page}&limit=${limit}`
        );
        if (!response.ok) {
          throw new Error("Something went wrong fetching booklist!");
        }
        const data = await response.json();
        setBooks(data.books);
        setPage(data.page);
        setLimit(data.limit);
        setPages(data.pages);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [limit]
  );

  // Use useEffect hook to call fetchBooks once when the component mounts
  useEffect(() => {
    fetchBooks(page); // Pass initial page value as argument
  }, [page, fetchBooks]);

  const handlePageChange = useCallback(
    (value) => {
      setPage(value); // Update page state with new value
      fetchBooks(value); // Call fetchBooks with new value as argument
    },
    [fetchBooks]
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {books &&
          books.map((book) => (
            <div key={book._id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <Link to={`/books/${book._id}`}>
                  <img
                  src={book.cover}
                  alt={book.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
                </Link>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/books/${book._id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {book.title}
                    </Link>
                  </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  ${book.price}
                </p>
              </div>
            </div>
          ))}
      </div>

      <Pagination
        currentPage={page}
        totalPages={pages}
        itemsPerPage={limit}
        onPageChange={handlePageChange}
      />
    </>
  );
}

export default BookList;
