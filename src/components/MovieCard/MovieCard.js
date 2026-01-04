import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/movie/${movie.id}`);
  };

  return (
    <div className="movie-card">
      <img
        className="movie-img"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <p className="movie-title">{movie.title}</p>
      <p className="vote-average">Rating: {movie.vote_average}</p>

      <button
        type="button"
        className="view-details-btn"
        onClick={handleViewDetails}
      >
        View Details
      </button>
    </div>
  );
};

export default MovieCard;
