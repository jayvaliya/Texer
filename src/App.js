
import NavBar from './components/Navbar';
import TextForm from './components/Form';
import About from './components/About';
import Contact from './components/Contact';
import React, { useState } from 'react'
import Alert from './components/Alert';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState('');

  const showAlert = (massage, type) => {
    setAlert({
      msg: massage,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#101010";
      // document.getElementById('exampleFormControlTextarea1').style.backgroundColor = '#434343';
      // document.getElementById('word1').style.backgroundColor = '#434343';
      // document.getElementById('word2').style.backgroundColor = '#434343';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert('Light mode has been enabled', 'success');
    }
  }
  return (

    <BrowserRouter basename='/Texer'>

      {/* This is navbar component */}
      <NavBar
        title="Texer"
        about="About"
        contact="Contact Us"
        mode={mode}
        toggleMode={toggleMode} />


      {/* This is alert component */}
      <Alert alert={alert} />


      {/* from here different routs start */}
      <Routes>

        <Route path="/" element={

          <div className="container">
            <TextForm heading="Enter text here:" mode={mode} />
          </div>
        } />

        <Route path="/about" element={

          <div className="container">
            <About mode={mode} />
          </div>
        } />
        <Route path='/contact' element={
          <Contact heading="Contact us" mode={mode} />
        } />

      </Routes>
    </BrowserRouter>
  );
}