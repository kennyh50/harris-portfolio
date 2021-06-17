import React, {useState, useEffect} from 'react';
import Dropdown from './components/Dropdown.js';
import './App.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';

function App() {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => {
  setIsOpen(!isOpen);
};

useEffect(() => {
  const hideMenu = () => {
    if(window.innerWidth > 768 && isOpen) {
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
    </>
   
  );
}

export default App;
