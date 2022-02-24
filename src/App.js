
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import React,{useState} from 'react';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";


function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#1a1a1c';
      document.body.style.color = 'white';
      showAlert('dark mode is enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert('dark mode is disabled','success');
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextMania" toggleMode={toggleMode} mode={mode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          {/* <Switch>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/"> */}
                <Text heading="Enter your text here: " mode={mode}/>
              {/* </Route>
          </Switch> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
