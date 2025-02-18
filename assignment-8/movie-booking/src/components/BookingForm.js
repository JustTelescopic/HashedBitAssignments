import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BookingForm.css';

function BookingForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    seats: 1,
    showtime: '5:30 PM'
  });
  const [errors, setErrors] = useState({});

  // Sample movie data
  const movies = [
    { id: 1, title: 'The Shawshank Redemption' },
    { id: 2, title: 'The Godfather' },
    // ... add the rest of your movies
    { id: 16, title: 'One Flew Over the Cuckoo\'s Nest' },
  ];

  const movie = movies.find(m => m.id === parseInt(id));

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
    else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Mobile number must be 10 digits';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Generate random booking ID and navigate to confirmation
      navigate(`/confirmation/${id}`, { state: { formData } });
    }
  };

  const showtimes = [
    '10:00 AM', '12:30 PM', '3:00 PM', '5:30 PM', '8:00 PM', '10:30 PM'
  ];

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="booking-form-container">
      <h1>Book Tickets for {movie.title}</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className={errors.mobile ? 'error' : ''}
          />
          {errors.mobile && <span className="error-message">{errors.mobile}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="showtime">Select Showtime</label>
          <select
            id="showtime"
            name="showtime"
            value={formData.showtime}
            onChange={handleChange}
          >
            {showtimes.map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="seats">Number of Seats</label>
          <select
            id="seats"
            name="seats"
            value={formData.seats}
            onChange={handleChange}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="submit-button">Book Tickets</button>
      </form>
    </div>
  );
}

export default BookingForm;