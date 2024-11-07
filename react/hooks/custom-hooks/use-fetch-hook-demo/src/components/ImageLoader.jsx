import { useEffect, useState, useRef } from "react";
import useFetch from "../hooks/useFetch";

const urlToFetch = "https://picsum.photos/v2/list?page={PAGE_NUMBER}&limit=10";

export default function ImageLoader() {
  const [fullImages, setFullImages] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const url = urlToFetch.replace("{PAGE_NUMBER}", pageNumber);
  const { loading, error, data } = useFetch(url);

  // Update fullImages when new data is fetched
  useEffect(() => {
    if (data && data.length > 0) {
      setFullImages((prevImages) => [...prevImages, ...data]);
    }
  }, [data]); // Only run this effect when data changes

  return (
    <div>
      {loading && <div className="loading">Loading Is In Progress.....</div>}

      {error && (
        <div className="error">Error Occurred While Fetching Images....</div>
      )}

      {fullImages.length > 0 && (
        <div className="imagesContainer">
          {fullImages.map((image, index) => (
            <img
              src={image.download_url}
              alt={image.id}
              key={index}
              width="200"
              height="200"
            />
          ))}
        </div>
      )}

      <button
        onClick={() => {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }}
      >
        Load More Images
      </button>
    </div>
  );
}
