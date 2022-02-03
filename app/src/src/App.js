import './App.css';
import {BrowserRouter as Router, useRoutes} from 'react-router-dom'
import Home from './pages/Home.tsx';
import Input from './pages/Input.tsx';
import Results from './pages/Results.tsx';
import React from 'react';

function App() {  
  let route = useRoutes([
    {path: '/', element: <Home />},
    {path: '/input', element: <Input />},
    {path: '/results', element: <Results />}
  ])
  return route;
}

function Real_App(){
  return(
    <Router>
      <App />
    </Router>
  );
}

export default Real_App;
