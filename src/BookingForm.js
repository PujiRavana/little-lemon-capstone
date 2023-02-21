import { useState } from 'react';

const BookingForm = (props) => {
  const [resDate, setResDate] = useState('');
  const [resTime, setResTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [error, setError] = useState('');
  const { availableTimes, dispatch, submitForm } = props;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!occasion) {
      setError('Error: Occasion is Required');
      return;
    }
    setError('');
    submitForm({resDate, resTime, guests, occasion});
  }

  const onDateChange = (e) => {
    const bookingDate = e.target.value;
    setResDate(bookingDate);
    dispatch({ bookingDate });
  }
  return (
    <>
      <h2>Reservation at Little Lemon</h2>
      <form className="table-reservation-form" onSubmit={onSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date"
        id="res-date"
        value={resDate}
        onChange={onDateChange}
        required="required"
      />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time"
        value={resTime}
        onChange={(e) => setResTime(e.target.value)}
        required="required">
          {availableTimes && availableTimes.map(availableTime => <option key={availableTime}>{availableTime}</option>)}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number"
        placeholder="0"
        min="1" max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required="required"
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}>
          <option></option>
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
      </select>
      <button type="submit">Reserve Now</button>
      <h4>{error}</h4>
      </form>
    </>
  );
}

export default BookingForm;
