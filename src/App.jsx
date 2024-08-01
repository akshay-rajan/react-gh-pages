import { React, useState, useEffect } from 'react'
import './App.css'

import About from './components/About'
import Header from './components/Header'
import Loader from './components/Loader'
import Projects from './components/Projects'
import Main from './components/Main'
import Contact from './components/Contact'


function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? <Loader /> : (
        <>
          <Header />
          <Main />
          <About />
          <Projects />
          <Contact />
        </>
      )}
    </>
  )
}

export default App
