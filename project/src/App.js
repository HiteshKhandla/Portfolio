
import './App.css';
import Layout from './components/Layout/Layout';
import About from './pages/About/About';
import TechStack from './pages/TechStack/TechStack';
import Projects from './pages/Projects/Projects';
import Education from './pages/Education/Education';
import Contact from './pages/Contact/Contact';
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from './context/ThemeContext';
import MobileNav from './components/MobileNav/MobileNav';



function App() {
  const [theme] =useTheme()
  return (
    <>
  
    <div id={theme}>
      <MobileNav/>
      <Layout />
      <div class="container">
        <About />
        <Education />
        <TechStack />
        <Projects />
        <Contact/>
        
      </div>
<div className='footer'>
  <h4 className='text-center'>
 Made with & tichnifoy yt copy 2023

  </h4>

</div>
</div>

<ScrollToTop smooth />
    </>
  );
}

export default App;
