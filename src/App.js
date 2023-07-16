import './App.css';
import React, { useState } from "react";
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";


function App() {
  const [currentPage, setCurrentPage] = useState('aboutMe');

  const renderContent = () => {
    switch (currentPage) {
      case 'aboutMe':
        return <AboutMe />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return null;
    }
  };

  const handleNavigation = (navLink) => {
    setCurrentPage(navLink);
  };

  return (
    <div className='react-portfolio'>
      <header>
        <h1>Eilís McMillan</h1>
      </header>
      <nav>
        <ul>
          <li>
            <button onClick={() => handleNavigation('aboutMe')}>About Me</button>
          </li>
          <li>
            <button onClick={() => handleNavigation('portfolio')}>Portfolio</button>
          </li>
          <li>
            <button onClick={() => handleNavigation('contact')}>Contact</button>
          </li>
          <li>
            <button onClick={() => handleNavigation('resume')}>Résumé</button>
          </li>
        </ul>
      </nav>
      <main>{renderContent()}</main>
      <footer>Eilís McMillan 2023
        <a href="#" target="_blank">
          <i class="fa-footer"> <BsGithub/></i>
        </a>
        <a href="#" target="_blank">
          <i class="fa-footer"> <BsLinkedin /> </i>
        </a>
        <a href="#" target="_blank">
          <i class="fa-footer"> <BsInstagram /> </i>
        </a>
      </footer>
    </div>
  );
}

export default App;











