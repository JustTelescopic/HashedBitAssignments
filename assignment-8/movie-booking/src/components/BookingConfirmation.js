import React, { useEffect, useState } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import './BookingConfirmation.css';

function BookingConfirmation() {
  const { id } = useParams();
  const location = useLocation();
  const [bookingId, setBookingId] = useState('');
  const { formData } = location.state || { formData: null };

  // Sample movie data
  const movies = [
    { id: 1, title: 'The Shawshank Redemption' },
    { id: 2, title: 'The Godfather' },
    // ... add the rest of your movies
    { id: 16, title: 'One Flew Over the Cuckoo\'s Nest' },
  ];

  const movie = movies.find(m => m.id === parseInt(id));

  useEffect(() => {
    // Generate a random booking ID
    const generateBookingId = () => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let result = '';
      for (let i = 0; i < 8; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    };

    setBookingId(generateBookingId());
  }, []);

  if (!formData || !movie) {
    return (
      <div className="booking-confirmation-container error">
        <h1>Error</h1>
        <p>No booking information found. Please try again.</p>
        <Link to="/" className="home-button">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="booking-confirmation-container">
      <div className="confirmation-box">
        <div className="confirmation-header">
          <h1>Booking Confirmed!</h1>
          <div className="checkmark">✓</div>
        </div>

        <div className="booking-details">
          <p className="booking-id">Booking ID: <span>{bookingId}</span></p>
          
          <div className="movie-details">
            <h2>{movie.title}</h2>
            <p><strong>Showtime:</strong> {formData.showtime}</p>
            <p><strong>Seats:</strong> {formData.seats}</p>
          </div>
          
          <div className="customer-details">
            <h3>Customer Information</h3>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Mobile:</strong> {formData.mobile}</p>
          </div>
          
          <div className="confirmation-message">
            <p>Your booking has been confirmed! A confirmation email has been sent to your email address.</p>
            <p>Please arrive 15 minutes before the show with this booking ID.</p>
          </div>
        </div>

        <div className="confirmation-actions">
          <Link to="/" className="home-button">Return to Home</Link>
          <button className="download-button">Download Ticket</button>
        </div>
      </div>
    </div>
  );
}

export default BookingConfirmation; 