import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert.js';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
  
// } from "react-router-dom";


function App() {
  const [mode, usemode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => setAlert(null), 2000);

  }


  const Darkmode = () => {
    if (mode === 'light') {
      usemode('dark')
      document.body.style.backgroundColor = 'grey'
      document.body.style.color = 'white'
      showAlert("Darkmode has been Enabled", "sucess")

    } else {
      usemode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Darkmode has been Disabled", "sucess")
    }
  }

  return (
    <>

      <Navbar title={"TextUtils"} mode={mode} darkmode={Darkmode} />

      <Alert alert={alert} />


      <div className="container">
        {/* <Router>
        <Routes>
          <Route path="/about" element={ <About />}>
            
          </Route>

          <Route path="/" element={<TextForm Heading="Enter the Text to analyze below" />}>
            

          </Route>
        </Routes>
        </Router> */}
        {/* <About/> */}
        <TextForm Heading="Enter the Text to analyze below" />
      </div>
    </>
  );
}

export default App;
