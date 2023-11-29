import './App.css';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './components/Section/Home';
import Data from './components/Section/Data';
import Contact from './components/Section/Contact';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/data" element={<Data />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
