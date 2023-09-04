import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './Header/ResponsiveAppBar';
import Header from './Header/Header';
import About from './About/About';
import Experience from './Experience/Experience';
import Educations from './Experience/Educations';
import Projects from './Projects/Projects';
import Contact from './Contact Me/Contact';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Header />
      <About/>
      <Educations/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
