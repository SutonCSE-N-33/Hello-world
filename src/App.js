import React from 'react';
import MainComponent from './Components/representational/MainComponent';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
const App = () =>{
  return(
    <BrowserRouter>
         <MainComponent />
    </BrowserRouter>
    
  )
}
export default App;
