import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './Header/ResponsiveAppBar';
import Header from './Header/Header';
import About from './About/About';
import Experience from './Experience/Experience';
import Educations from './Experience/Educations';
import Projects from './Projects/Projects';

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Header />
      <About/>
      <Educations/>
      <Experience/>
      <Projects/>
    </>
  );
}

export default App;
