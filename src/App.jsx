import { React, useState, useEffect } from 'react'
import './App.css'

import About from './components/About'
import Header from './components/Header'
import Loader from './components/Loader'
import Projects from './components/Projects'
import Main from './components/Main'
import Contact from './components/Contact'
import Experience from './components/Experience'


function App() {

  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    window.addEventListener('load', () => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  });

  console.log(window.innerWidth);

  return (
    <>
      {loading ? <Loader /> : (
        <>
          <Header />
          <Main />
          <About />
          <Projects />
          <Experience />
          <Contact />
          <div style={{color: 'wheat', zIndex: 20, fontSize: 10,}}>Last Updated: 08/2024</div>
        </>
      )}
    </>
  )
}

export default App
