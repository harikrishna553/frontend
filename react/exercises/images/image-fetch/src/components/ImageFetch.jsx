import { useEffect, useState } from "react";

const urlToFetch = "https://picsum.photos/v2/list?page={PAGE_NUMBER}&limit=10";

export default function ImageFetch() {
  const [pageNumber, setPageNumber] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  async function loadImages() {
    try {
      setLoading(true);
      const imageFetchUrl = urlToFetch.replace("{PAGE_NUMBER}", pageNumber);
      const response = await fetch(imageFetchUrl);
      const data = await response.json();

      if (data.length < 10) {
        setHasMore(false);
      } else if (images.length + data.length == 50) {
        setHasMore(false);
      }

      setImages([...images, ...data]);

      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    } catch (error) {
      setError(`Error Occuured While Fetching The Images : ${error}`);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled to the bottom of the page
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
      ) {
        if (hasMore && !loading) {
          // Prevent fetching more than 50 images
          loadImages();
        }
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [images, loading]);

  useEffect(() => {
    loadImages();
  }, []);

  return (
    <div className="rootImageContainer">
      <div className="imagesContainer">
        {images.map((image, index) => (
          <img className="image" key={image.id} src={image.download_url} />
        ))}
      </div>

      {hasMore && !loading && (
        <button className="loadMoreItems" onClick={() => loadImages()}>
          Load More Images
        </button>
      )}

      {loading && <div className="loading">Images are Loading.......</div>}

      {error && (
        <div className="error">Error Occurred while Loading Images {error}</div>
      )}
    </div>
  );
}
