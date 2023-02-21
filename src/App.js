
import './App.css';
import Header from './Header';

import Footer from './Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import TableReservation from './TableReservation';
import ConfirmedBooking from './ConfirmedBooking';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/reservation' element={<TableReservation />} />
        <Route path='/booking-confirmation' element={<ConfirmedBooking />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
