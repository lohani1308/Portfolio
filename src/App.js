import './App.css';
import React,{ Suspense } from 'react';
import About from './components/About/About';
import Navbar from './components/Navbar/Navbar';

const Experience=React.lazy(()=>import('./components/Experience/Experience')) //Lazy loading experienc component
const Projects=React.lazy(()=>import('./components/Projects/Projects'));
const Skills=React.lazy(()=>import('./components/skills/Skills'));

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About />
      <Suspense fallback={<div>Loading Experience...</div>}>
        <Experience />
      </Suspense>
      <Suspense fallback={<div>Loading Skills...</div>}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div>Loading Projects...</div>}>
        <Projects />
      </Suspense>
    </div>
  );
}

export default App;

