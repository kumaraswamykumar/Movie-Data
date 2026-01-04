import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchDetails = async () => {
      const movieRes = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=412a83faa2614e2a6024230b50735e36&language=en-US`
      );
      const movieData = await movieRes.json();
      setMovie(movieData);

      const castRes = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=412a83faa2614e2a6024230b50735e36`
      );
      const castData = await castRes.json();
      setCast(castData.cast.slice(0, 8));
    };

    fetchDetails();
  }, [id]);

  if (!movie) return null;

  return (
    <div className="details-page">
      <Navbar />

      {/* HERO SECTION */}
      <div
        className="hero"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(27,31,39,0.95), rgba(27,31,39,0.6)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="hero-content">
          <h1>{movie.title}</h1>
          <p className="overview">{movie.overview}</p>
        </div>
      </div>

      {/* CAST SECTION */}
      <div className="cast-section">
        <h2>Cast</h2>

        <div className="cast-list">
          {cast.map((actor) => (
            <div key={actor.id} className="cast-card">
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                    : "https://via.placeholder.com/200x300?text=No+Image"
                }
                alt={actor.name}
              />
              <h4>{actor.name}</h4>
              <p>{actor.character}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
