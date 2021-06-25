import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dropdown from './components/Dropdown.js';
import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Contact from './pages/Contact.js';

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
      <Hero />
      <Switch>
        <Route path='/contact' component={Contact} />
      </Switch>
    </>

  );
}

export default App;
