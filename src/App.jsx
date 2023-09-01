import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './Header/ResponsiveAppBar';
import Header from './Header/Header';
import About from './About/About';
import Experience from './Experience/Experience';
import Educations from './Experience/Educations';

function App() {
  return (
    <>
      <ResponsiveAppBar />
      <Header />
      <About/>
      <Educations/>
      <Experience/>
    </>
  );
}

export default App;
