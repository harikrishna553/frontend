import { useState } from "react";
import { FaStar } from "react-icons/fa6";
import "../styles/styles.css";

export default function RatingComponent({ maxRating }) {
  const [rating, setRating] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(0);

  function handleMouseMove(index) {
    setHoverIndex(index + 1);
  }

  function handleMouseLeave() {
    setHoverIndex(0);
  }

  function handleMouseClick(index) {
    setRating(index + 1);
  }

  // Directly assign the conditional rendering to resultToRender without curly braces
  const resultToRender =
    maxRating && maxRating > 0 ? (
      <div className="ratingContainer">
        <div className="ratingLabel">
          {rating ? "Selected Rating: " + rating : null}
        </div>
        <div className="ratings">
          {Array.from({ length: maxRating }).map((_, index) => (
            <FaStar
              key={index}
              onMouseMove={() => handleMouseMove(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleMouseClick(index)}
              style={{
                color: index < (hoverIndex || rating) ? "#FFD700" : "black",
                fontSize: "40px",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
    ) : null;

  // Return the resultToRender without curly braces
  return resultToRender;
}
