import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dropdown from './components/Dropdown.js';
import './App.css';
import Navbar from './components/Navbar.js';
import Contact from './pages/Contact.js';
import Home from './pages/index.js';
import Projects from './pages/Projects.js';
import Socials from './pages/Socials.js';
import Footer from './components/Footer.js';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)

      }
    }

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  })
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/socials' component={Socials} />
        <Route path='/contact' component={Contact} />
      </Switch>
      <Footer />
    </>

  );
}

export default App;
