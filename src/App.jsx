import { React, useState, useEffect } from 'react'
import './App.css'

import About from './components/About'
import Header from './components/Header'
import Loader from './components/Loader'
import Projects from './components/Projects'
import Main from './components/Main'
import Contact from './components/Contact'
import Experience from './components/Experience'
import BackgroundAnimation from './components/BackgroundAnimation'


function App() {

  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const onPageLoad = () => {
      setLoading(false);
    };
    
    // If already loaded
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  console.log("Width: " + window.innerWidth);

  return (
    <>
      {loading ? <Loader /> : (
        <>
          <BackgroundAnimation />
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
