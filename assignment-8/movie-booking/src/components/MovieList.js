import React from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

function MovieList() {
  // Sample movie data
  const movies = [
    { id: 1, title: 'The Shawshank Redemption', imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg', genre: 'Drama', rating: 9.3 },
    { id: 2, title: 'The Godfather', imageUrl: 'https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_QL75_UY281_CR4,0,190,281_.jpg', genre: 'Crime, Drama', rating: 9.2 },
    { id: 3, title: 'The Dark Knight', imageUrl: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg', genre: 'Action, Crime, Drama', rating: 9.0 },
    { id: 4, title: 'The Godfather: Part II', imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDIxMzBlZDktZjMxNy00ZGI4LTgxNDEtYWRlNzRjMjJmOGQ1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', genre: 'Crime, Drama', rating: 9.0 },
    { id: 5, title: 'Pulp Fiction', imageUrl: 'https://i.etsystatic.com/35704812/r/il/7e48be/3986261137/il_570xN.3986261137_a6wu.jpg', genre: 'Crime, Drama', rating: 8.9 },
    { id: 6, title: 'Schindler\'s List', imageUrl: 'https://m.media-amazon.com/images/M/MV5BNjM1ZDQxYWUtMzQyZS00MTE1LWJmZGYtNGUyNTdlYjM3ZmVmXkEyXkFqcGc@._V1_.jpg', genre: 'Biography, Drama, History', rating: 8.9 },
    { id: 7, title: 'The Lord of the Rings: The Return of the King', imageUrl: 'https://m.media-amazon.com/images/I/81qxEOD+YzL._AC_UF1000,1000_QL80_.jpg', genre: 'Adventure, Drama, Fantasy', rating: 8.9 },
    { id: 8, title: '12 Angry Men', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/12_Angry_Men_%281957_film_poster%29.jpg/670px-12_Angry_Men_%281957_film_poster%29.jpg', genre: 'Crime, Drama', rating: 8.9 },
    { id: 9, title: 'The Lord of the Rings: The Fellowship of the Ring', imageUrl: 'https://via.placeholder.com/300x450?text=LOTR+Fellowship', genre: 'Adventure, Drama, Fantasy', rating: 8.8 },
    { id: 10, title: 'Inception', imageUrl: 'https://via.placeholder.com/300x450?text=Inception', genre: 'Action, Adventure, Sci-Fi', rating: 8.8 },
    { id: 11, title: 'Fight Club', imageUrl: 'https://via.placeholder.com/300x450?text=Fight+Club', genre: 'Drama', rating: 8.8 },
    { id: 12, title: 'Forrest Gump', imageUrl: 'https://via.placeholder.com/300x450?text=Forrest+Gump', genre: 'Drama, Romance', rating: 8.8 },
    { id: 13, title: 'The Lord of the Rings: The Two Towers', imageUrl: 'https://via.placeholder.com/300x450?text=LOTR+Two+Towers', genre: 'Adventure, Drama, Fantasy', rating: 8.7 },
    { id: 14, title: 'The Matrix', imageUrl: 'https://via.placeholder.com/300x450?text=The+Matrix', genre: 'Action, Sci-Fi', rating: 8.7 },
    { id: 15, title: 'Goodfellas', imageUrl: 'https://via.placeholder.com/300x450?text=Goodfellas', genre: 'Biography, Crime, Drama', rating: 8.7 },
    { id: 16, title: 'One Flew Over the Cuckoo\'s Nest', imageUrl: 'https://via.placeholder.com/300x450?text=One+Flew+Over', genre: 'Drama', rating: 8.7 },
  ];

  return (
    <div className="movie-list-container">
      <h1>Movies Playing Now</h1>
      <div className="movie-grid">
        {movies.map(movie => (
          <div key={movie.id} className="movie-card">
            <Link to={`/movie/${movie.id}`}>
              <img src={movie.imageUrl} alt={movie.title} className="movie-poster" />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>Genre: {movie.genre}</p>
                <p>Rating: {movie.rating}/10</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;