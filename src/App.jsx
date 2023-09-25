// eslint-disable-next-line no-unused-vars

import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Restaurant from './pages/Restaurant';
import Add from './pages/Add';
import Update from './pages/Update';


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Restaurant />} />
          <Route path="/add" element={<Add />} />
          <Route path="/search" element={<Search />} />
          <Route path='/update/:id' element={<Update />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
