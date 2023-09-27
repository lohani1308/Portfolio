import './App.css';
import React,{ Suspense } from 'react';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';

const Experience=React.lazy(()=>import('./components/Experience/Experience')) //Lazy loading experienc component

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About />
      <Suspense fallback={<div>Loading...</div>}>
        <Experience />
      </Suspense>
    </div>
  );
}

export default App;

