import './App.css';
// import About from './components/About';
// import React from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import {BrowserRouter as Router,
// Route,Routes} from "react-router-dom";


//In pace of switch we need to write <Routes></Routes>

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (msg, type) => {
    setalert({
      message: msg,
      type: type
    })

    setTimeout(() => {
      setalert(null)
    }, 1200);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'grey'
      document.body.style.color = 'white'
      showalert("Dark mode has been enabled", "success");
      //changing title dynamically
      document.title = "TextUtiles-Dark Mode"

      /*
         //Pretending to be a bug in your site
          setInterval(()=>{
          document.title="New Title"
          },2000)
          setInterval(()=>{
          document.title="old Title"
          },1500)
     */
    }
    else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showalert("Light mode has been enabled", "success");
      //changing title dynamically
      document.title = "TextUtiles-Light Mode"

    }
  }
  return (
    <>
        {/* <Router> */}
        <Navbar title="JANAK GOYAL" home="Home" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container">
       
        {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}/> */}
            {/* <Route exact path="/" element={<Textform heading="Enter your text to analyze" mode={mode} showalert={showalert} />}/> */}
               <Textform heading="Enter your text to analyze" mode={mode} showalert={showalert} />
            
         {/* </Routes> */}
          {/* <About/> */}


        </div>

        {/* </Router> */}
    </>
  );
}

export default App;
