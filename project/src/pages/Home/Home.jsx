import React from 'react'
import { useTheme } from '../../context/ThemeContext';
import './home.css'
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/hk.pdf'
import { BsFillMoonStarsFill, BsSunFill, BsSunriseFill } from 'react-icons/bs'
import { Fade } from 'react-reveal';

const Home = () => {
  const [theme, setTheme] = useTheme()
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"))
  }
  return (
    <>
      <div className="container-fluid home-container" id='home'>
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (<BsFillMoonStarsFill size={30} />) :
            (<BsSunFill size={30} />)}
        </div>
        <div className="container home-content">
          <Fade left>
          <h2> Hi I'm </h2>
          <h1><Typewriter
            options={{
              strings: ['React Js Devloper ! '],
              autoStart: true,
              loop: true,
            }}
          /></h1>
          </Fade>
          <Fade bottom>
          <div className="home-buttons">
            <button className="btn btn-hire">Hire Me</button>
            <a className="btn btn-cv" href={Resume} download="download.pdf">My Resume</a>

          </div>
          </Fade>
        </div>
      </div>
    </>
  )
}

export default Home
