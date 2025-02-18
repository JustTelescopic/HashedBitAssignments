import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MovieDetails.css';

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const movieId = parseInt(id);

  // Sample movie data
  const movies = [
    { id: 1, title: 'The Shawshank Redemption', imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg', genre: 'Drama', rating: 9.3, description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.', duration: '142 min', director: 'Frank Darabont', cast: 'Tim Robbins, Morgan Freeman, Bob Gunton' },
    { id: 2, title: 'The Godfather', imageUrl: 'https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_QL75_UY281_CR4,0,190,281_.jpg', genre: 'Crime, Drama', rating: 9.2, description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.', duration: '175 min', director: 'Francis Ford Coppola', cast: 'Marlon Brando, Al Pacino, James Caan' },
    // ... add more movie details for the rest of your movies
    { id: 16, title: 'One Flew Over the Cuckoo\'s Nest', imageUrl: 'https://via.placeholder.com/300x450?text=One+Flew+Over', genre: 'Drama', rating: 8.7, description: 'A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients.', duration: '133 min', director: 'Milos Forman', cast: 'Jack Nicholson, Louise Fletcher, Will Sampson' },
  ];

  const movie = movies.find(m => m.id === movieId);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const handleBooking = () => {
    navigate(`/booking/${movieId}`);
  };

  const getShowtimes = () => {
    return [
      '10:00 AM', '12:30 PM', '3:00 PM', '5:30 PM', '8:00 PM', '10:30 PM'
    ];
  };

  return (
    <div className="movie-details-container">
      <div className="movie-details">
        <div className="movie-poster-container">
          <img src={movie.imageUrl} alt={movie.title} className="movie-poster-large" />
        </div>
        <div className="movie-info-container">
          <h1>{movie.title}</h1>
          <div className="movie-meta">
            <span className="movie-rating">★ {movie.rating}/10</span>
            <span className="movie-duration">{movie.duration}</span>
            <span className="movie-genre">{movie.genre}</span>
          </div>
          <p className="movie-description">{movie.description}</p>
          <div className="movie-crew">
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Cast:</strong> {movie.cast}</p>
          </div>
          <div className="showtimes">
            <h3>Available Showtimes</h3>
            <div className="showtime-buttons">
              {getShowtimes().map((time, index) => (
                <button key={index} className="showtime-button" onClick={handleBooking}>
                  {time}
                </button>
              ))}
            </div>
          </div>
          <button className="book-button" onClick={handleBooking}>Book Seats</button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;