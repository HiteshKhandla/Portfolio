import React, { useState } from 'react'
import './MobileNav.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineMenuFold} from 'react-icons/ai'
import { FcAbout, FcBiotech, FcConferenceCall, FcHome, FcReadingEbook, FcVideoProjector,  } from 'react-icons/fc'
import { Link } from 'react-scroll'
const MobileNav = () => {
  const [open,setOpen]=useState(false)
  const handleOpen =()=>{
    setOpen(!open)
  }

  const handleMenuClick=()=>{
    setOpen(false)
  }
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile-nav-header">
          { open ? (<AiOutlineMenuFold size={30} className='mobile-nav-icon' onClick={handleOpen}/>) : ( <GiHamburgerMenu size={30} className='mobile-nav-icon' onClick={handleOpen}/>)}
       
        <span className='mobile-nav-title'>My PortFolio App</span>
        </div>
        { open && (
  <div className="mobile-nav-menu">
  <div className="nav-items">
                  <div className="nav-item">
                      <div className="nav-link"> <Link to='home' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}> 
                          <FcHome /> Home
                      </Link>
                      </div>
                  </div>
                  <div className="nav-item">
                      <div className="nav-link">
                          <Link to='about' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}> 
                              <FcAbout /> About
                          </Link> </div>
                  </div>
                  <div className="nav-item">
                      <div className="nav-link"> <Link to='education' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}><FcReadingEbook />Education </Link> </div>
                  </div>

                  <div className="nav-item">
                      <div className="nav-link"> 
                      <Link to='tech' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                          <FcBiotech /> Tech Stack </Link></div>
                  </div>

                  <div className="nav-item">
                      <div className="nav-link">
                      <Link to='project' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}>
                           <FcVideoProjector />Projects </Link></div>
                  </div>
                  {/* <div className="nav-item">
  <div className="nav-link"> <FcPortraitMode/>Work Experience</div>
</div> */}

                  <div className="nav-item">
                      <div className="nav-link"><Link to='contact' spy={true} smooth={true} offset={-100} duration={100} onClick={handleMenuClick}> <FcConferenceCall />Contact Me </Link></div>
                  </div>

              </div>
  </div>
        )}
      
      </div>
    </>
  )
}

export default MobileNav
