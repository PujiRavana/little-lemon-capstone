import { useReducer } from 'react';
import BookingForm from './BookingForm';
import { fetchAPI, submitAPI } from './api';
import { useNavigate } from 'react-router-dom';

const TableReservation = () => {
  const navigate = useNavigate();
  const updateTimes = (state, action) => {
    return fetchAPI(new Date(action.bookingDate));
  };

  const initializeTimes = () => {
    const todayDate = new Date();
    return fetchAPI(todayDate);
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const submitForm = (formData) => {
    const isSuccessful = submitAPI(formData);
    if (isSuccessful) {
      navigate('/booking-confirmation');
    }
  }

  return (
    <main className="table-reservation">
      <BookingForm  availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
}

export default TableReservation;
