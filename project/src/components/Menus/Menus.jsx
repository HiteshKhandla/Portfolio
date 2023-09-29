import React from 'react'
import './Menus.css'
import { FcAbout, FcBiotech, FcConferenceCall, FcHome, FcPortraitMode, FcReading, FcReadingEbook, FcVideoProjector, FcVoicePresentation } from 'react-icons/fc'
import { Link } from 'react-scroll'
import Zoom from 'react-reveal/Zoom';
import { Fade } from 'react-reveal';

const Menus = ({ toggle }) => {
    return (
        <>
            {toggle ? (
                <>
                <Zoom>
                    <div className="navbar-profile-pic">
                        <img src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt='profile' />
                    </div>
                    </Zoom >
                    <Fade left>
                    <div className="nav-items">
                        <div className="nav-item">
                            <div className="nav-link"> <Link to='home' spy={true} smooth={true} offset={-100} duration={100}> 
                                <FcHome /> Home
                            </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='about' spy={true} smooth={true} offset={-100} duration={100}> 
                                    <FcAbout /> About
                                </Link> </div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link"> <Link to='education' spy={true} smooth={true} offset={-100} duration={100}><FcReadingEbook />Education </Link> </div>
                        </div>

                        <div className="nav-item">
                            <div className="nav-link"> 
                            <Link to='tech' spy={true} smooth={true} offset={-100} duration={100}>
                                <FcBiotech /> Tech Stack </Link></div>
                        </div>

                        <div className="nav-item">
                            <div className="nav-link">
                            <Link to='project' spy={true} smooth={true} offset={-100} duration={100}>
                                 <FcVideoProjector />Projects </Link></div>
                        </div>
                        {/* <div className="nav-item">
        <div className="nav-link"> <FcPortraitMode/>Work Experience</div>
    </div> */}

                        <div className="nav-item">
                            <div className="nav-link"><Link to='contact' spy={true} smooth={true} offset={-100} duration={100}> <FcConferenceCall />Contact Me </Link></div>
                        </div>

                    </div>
                    </Fade >
                </>
            )
                :
                (
                    <div className="nav-items">
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='home' spy={true} smooth={true} offset={-100} duration={100}> <FcHome title='Home' />
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                                <Link to='about' spy={true} smooth={true} offset={-100} duration={100}> <FcAbout title='About' />
                                </Link>
                            </div>
                        </div>
                        <div className="nav-item">
                            <div className="nav-link">
                             <Link to='education' spy={true} smooth={true} offset={-100} duration={100}> 
                                 <FcReadingEbook title='Education' />
                                 </Link></div>
                        </div>

                        <div className="nav-item">
                            <div className="nav-link">
                          <Link to='tech' spy={true} smooth={true} offset={-100} duration={100}> 
                                 <FcBiotech title='Tech Stack' /> 
                                 </Link> </div>
                        </div>

                        <div className="nav-item">
                         
                            <div className="nav-link"> <Link to='projects' spy={true} smooth={true} offset={-100} duration={100}> 
                             <FcVideoProjector title='Projects' />
                             </Link></div>
                        </div>
                        {/* <div className="nav-item">
        <div className="nav-link"> <FcPortraitMode title='Work Experience'/> </div>
    </div> */}

                        <div className="nav-item">
                            <div className="nav-link"> 
                            <Link to='contact' spy={true} smooth={true} offset={-100} duration={100}> <FcConferenceCall title='Contact Me' /> </Link></div>
                        </div>

                    </div>
                )
            }


        </>
    )
}

export default Menus
