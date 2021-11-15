import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar title="TextUtils" about="About" />
        <Routes>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/" element={<TextForm heading="Enter The Text" />}>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
