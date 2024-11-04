import { useEffect, useState } from "react";

export default function ImageGallary() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imgIndex, setImageIndex] = useState(-1);

  function handleKeyEvents(event) {
    setImageIndex((prevIndex) => {
      //console.log(`Image Index before update: ${prevIndex}, ${images}`);

      if (event.key === "Escape" || event.keyCode === 27) {
        return -1;
      }

      if (event.key === "ArrowLeft" || event.keyCode === 37) {
        return prevIndex === 0 ? images.length - 1 : prevIndex - 1;
      } else if (event.key === "ArrowRight" || event.keyCode === 39) {
        return prevIndex === images.length - 1 ? 0 : prevIndex + 1;
      }

      return prevIndex;
    });
  }

  async function loadImages() {
    try {
      setLoading(true);
      const response = await fetch(
        "https://picsum.photos/v2/list?page=10&limit=10"
      );
      const data = await response.json();
      setImages(data);
      //console.log(data);
    } catch (error) {
      console.log(error);
      setError(
        `Error Occurred while fetching the images , ${error.toString()}`
      );
    }
    setLoading(false);
  }

  useEffect(() => {
    loadImages();
  }, []);

  useEffect(() => {
    //console.log("Adding Event Handlers");
    document.addEventListener("keydown", handleKeyEvents);
    return () => {
      console.log("Removing Event Handlers");
      document.removeEventListener("keydown", handleKeyEvents);
    };
  }, [images]);

  if (loading) {
    return <div className="loading">Data Loading Is In Progress.....</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="imageContainer">
      {images && images.length > 0 ? (
        images.map((data, index) => (
          <div className="image" key={data.id}>
            <img
              className="thumbnail"
              src={data.download_url}
              alt={data.author}
              onClick={() => {
                console.log(`Setting image index to ${index}`);
                setImageIndex(index);
              }}
            />
          </div>
        ))
      ) : (
        <div>No Data Found</div>
      )}
      {imgIndex && console.log(`${imgIndex}`)};
      {imgIndex >= 0 && imgIndex < images.length && (
        <div className="imagePreviewContainer">
          <img
            className="imagePreview"
            src={images[imgIndex].download_url}
            alt={`Preview of ${images[imgIndex].author}`}
          />
          <button onClick={() => setImageIndex(-1)} className="close">
            X
          </button>
        </div>
      )}
    </div>
  );
}
