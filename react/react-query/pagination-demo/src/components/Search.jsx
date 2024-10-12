import { useState } from "react";
import { useQuery } from "react-query";

const pageSize = 5;

async function fetchPaginatedData({ queryKey }) {
  const [_key, { pageNum, searchTerm }] = queryKey;

  // Simulate fetching data by returning a promise
  return new Promise((resolve) => {
    // Create dummy data based on pageNum, pageSize, and searchTerm
    const start = (pageNum - 1) * pageSize + 1;
    const data = Array.from(
      { length: pageSize },
      (_, index) => `${searchTerm}-${start + index}`
    );

    resolve(data);
  });
}

export default function Search() {
  const [pageNum, setPageNum] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  // Use useQuery to fetch paginated data
  const { data, isLoading, isError } = useQuery(
    ["paginatedData", { pageNum, searchTerm }],
    fetchPaginatedData,
    { enabled: hasSearched && !!searchTerm } // Only fetch data if searchTerm is not empty
  );

  return (
    <>
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            setHasSearched(true);
            // Reset to page 1 whenever a new search is performed
            setPageNum(1);
          }}
        >
          <p>
            <label htmlFor="query">Enter some text to search:</label>
            <input
              type="text"
              id="query"
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
                setHasSearched(false);
              }}
            />
          </p>

          <p>
            <button type="submit">Search</button>
            <button
              type="button"
              onClick={() => {
                setPageNum((prev) => prev + 1);
              }}
            >
              Next Page
            </button>
          </p>
        </form>

        <div>
          {isLoading && <p>Loading...</p>}
          {isError && <p>Failed to fetch data.</p>}
          {data && (
            <ul>
              {data.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
