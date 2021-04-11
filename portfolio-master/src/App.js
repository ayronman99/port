import React, { useRef, useState } from 'react';
import './styles/App.css';
import SkillSet from './components/SkillSet';
import ProjectWorks from './components/ProjectWorks';
import Contact from './components/Contact';
import Slider from './components/CertCarousel';
import buildweb from './skills/buildweb.svg';


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
                    <li><a href='#skills'>Skills</a></li>
                    <li><a href='#work'>Work</a></li>
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </nav>
        
             
       {/* Home page down here*/}

        <div className='home' id='home'>

            <div className='center-info'>
            <h1>Hi! My name is Lee.</h1>
                <p>Welcome to my portfolio, I'm a self-taught front-end developer and an aspiring fullstack developer.</p>
                <br />
                <p>I can help you in creating your dream website. Whether you're looking to attract prospect and potential clients or just show the world your masterpiece.</p>
              
                <button className="know-more" 
                onClick={aboutScroll}
                > Click here to know more </button>
            </div>

            <div className='coderhandler'>
                    <img src={buildweb}
                      alt='build websites'
                    ></img>
                  </div>
        </div>  
      
      {/* <!-- skills section down here -->*/}

      <div ref={aboutRef} className='skills' id='skills'>
        <h2> My Skills </h2>

          <p>Here are the list of skills, I have to help you in achieving your goals:</p>

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