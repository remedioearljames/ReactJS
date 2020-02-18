import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
  return (
     <div >
        <Header/>
        <Dashboard/>
        <Footer/>
     </div>
  );
}

export default App;
