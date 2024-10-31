import { useEffect, useState } from "react";
import "../css/styles.css";

export default function ImageSlider({ page = 1, limit = 5 }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [images, setImages] = useState([]);

  function updatePrevImageIndex() {
    setImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  }

  function updateNextImageIndex() {
    setImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  }

  async function loadData() {
    setLoading(true);
    setError(null); // Reset error state before fetching new data

    try {
      let url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
      let response = await fetch(url);

      if (!response.ok) {
        throw new Error("Failed to fetch images");
      }

      let data = await response.json();
      setImages(data);
    } catch (error) {
      setError("Error occurred while loading the images.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, [page, limit]);

  if (loading) {
    return <div className="loading">Data Loading Is In Progress</div>;
  }

  if (error) {
    return <div>Error Occurred While Fetching The Images {error}</div>;
  }

  if (images.length <= 0) {
    return <div>No Imaged Loaded</div>;
  }

  return (
    <div className="container">
      <div className="image-slider">
        <button
          className="nav-button left-button"
          onClick={() => updatePrevImageIndex()}
        >
          PREV
        </button>
        <button
          className="nav-button right-button"
          onClick={() => updateNextImageIndex()}
        >
          NEXT
        </button>

        {images.length > 0 && <img src={images[imageIndex].download_url} />}

        <div className="buttons-group">
          {images.map((_, index) => (
            <button
              key={index}
              className={
                index === imageIndex
                  ? "button circle-button active-button"
                  : "button circle-button"
              }
              onClick={() => {
                setImageIndex(index);
              }}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
