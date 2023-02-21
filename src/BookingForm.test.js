import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Reservation at Little Lemon");
  expect(headingElement).toBeInTheDocument();
});


