import logo from './logo.svg';
import './App.css';
import SignIn from './components/pages/SignIn';
import Header from './components/pages/Header';
import { Route, Routes } from 'react-router-dom';
import Listing from './components/pages/Listing';
import CreateDragon from './components/pages/CreateDragon';
import ShowDragon from './components/pages/ShowDragon';

function App() {
  const loggedUserId = localStorage.getItem("userId")

  return (
    <>
      {loggedUserId != undefined ? (
        <Header />
      ) : (
        <SignIn />
      )}

      <Routes>
        <Route path="/Listing" element={<Listing />} />
        <Route path="/CreateDragon" element={<CreateDragon />} />
        <Route path="/ShowDragon/:id" element={<ShowDragon />} />
      </Routes>
    </>
  );
}

export default App;