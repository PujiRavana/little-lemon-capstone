import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('TableReservation initializeTimes and updateTimes', () => {
  test("Reservation Date Change Dispatches Action with bookingDate", () => {
    const initialTimes = ['17:00','18:00','19:00'];
    const onChange = jest.fn();
    render(<BookingForm availableTimes={initialTimes} dispatch={onChange} />);
    const dateElement = screen.getByLabelText("Choose date");
    fireEvent.change(dateElement, { target: {value:'2023-02-22' }});
    expect(onChange).toHaveBeenCalledWith({ bookingDate: '2023-02-22' });
  });
  // test()
});
