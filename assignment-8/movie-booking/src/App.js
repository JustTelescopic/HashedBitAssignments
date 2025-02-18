import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import BookingForm from './components/BookingForm';
import BookingConfirmation from './components/BookingConfirmation';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="logo">MovieTickets</div>
          <nav className="nav">
            <a href="/">Home</a>
            <a href="/#">Movies</a>
            <a href="/#">Theaters</a>
            <a href="/#">About</a>
          </nav>
        </header>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<MovieList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/booking/:id" element={<BookingForm />} />
            <Route path="/confirmation/:id" element={<BookingConfirmation />} />
          </Routes>
        </main>
        
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>MovieTickets</h3>
              <p>Your one-stop destination for booking movie tickets online.</p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/#">About Us</a></li>
                <li><a href="/#">Terms & Conditions</a></li>
                <li><a href="/#">Privacy Policy</a></li>
                <li><a href="/#">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Connect With Us</h3>
              <div className="social-icons">
                <a href="/#">Facebook</a>
                <a href="/#">Twitter</a>
                <a href="/#">Instagram</a>
              </div>
            </div>
          </div>
          <div className="copyright">
            &copy; {new Date().getFullYear()} MovieTickets. All Rights Reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;