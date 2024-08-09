import React, {useState} from 'react';
import NavBar from './Components/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './App.css';

function App() {

  return (
    <div className="App">
      <NavBar />
      <div className="intro">
        <div> Hello, My name is </div>
        <div className="title"> Sam Chang </div>
        <div className="intro-body">I am a results-driven fullstack Software Engineer with 2+ years of experience in financial IT industry, proficient in multiple languages and frameworks, committed to clean code, and skilled in agile methodologies and team collaboration. I am also outgoing and easy to be friend with. If you have further question, feel free to contact me!</div>  
      </div>
      
      <div className="tech-stack">
        <div className="title">Technical Skills</div>
        
        <div className="language">
          <i class="fa-brands fa-java"></i>
        </div>
          
        <div className="frameworks"></div>
        <div className="developer-tool"></div>
      </div>
      
      <div className="Projects">

      </div>
    </div>
  );
} 

export default App;
