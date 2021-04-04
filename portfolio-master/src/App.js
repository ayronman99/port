import React, { useRef, useState } from 'react';
import './styles/App.css';
import SkillSet from './components/SkillSet';
import ProjectWorks from './components/ProjectWorks';
import Contact from './components/Contact';
import Slider from './components/CertCarousel';

function App(){

  const aboutRef = useRef();
  const [navibar,setNavibar] = useState(false);
  


  const aboutScroll = () => aboutRef.current.scrollIntoView();

  const changeNavStyle = () => {
    if(window.scrollY >= 740){
      setNavibar(true)
    } else {
      setNavibar(false)
    }
  }
  window.addEventListener('scroll', changeNavStyle);
  
  return (
    <div className='container'>
     
        <nav className={navibar ? 'navibar activate' : 'navibar'}>
                <ul>
                    <li><a href='#home'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#work'>Work</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </nav>
        
             
       {/* Home page down here*/}

        <div className='home' id='home'>

            <div className='center-info'>
            <h1>Hello! My name is Lee.</h1>
                <p>I'm a self-taught web developer.</p>
              
                <button className="know-more" 
                onClick={aboutScroll}
                > Click here to know more {/*<i className="fas fa-chevron-right"></i>*/}</button>
            </div>
        </div>  
      
      {/* About me down here*/}

      <div ref={aboutRef} className='about' id='about'>
        <h2> About me </h2>
          <p>I'm a self-taught front-end developer and an aspiring fullstack developer.<br />I can help you in creating your dream website. Whether you're looking to attract prospect<br /> and potential clients or just show the world your masterpiece.</p>

            <strong>Here are the list of skills, I have to help you in achieving your goals:
            </strong>
            
          <div className='skeel'>
            <SkillSet />
          </div>

         <Slider />
        
      </div>

      {/*gallery of projects down here*/}

      <div className='works' id='work'>
        <h2>Here is my gallery of works</h2>
         <ProjectWorks />
      </div>

      {/*how to contact down here*/}
      
      <div className='contact' id='contact'>
       <Contact />
      </div>
  </div>
  )
}



export default App;