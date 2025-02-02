import Intro from './components/Intro.jsx';
import Navbar from './components/Navbar.jsx';
import AboutMe from './components/AboutMe.jsx';
import WorkExperienceGrid from './components/WorkExperienceGrid.jsx'
import Footer from './components/Footer.jsx';
import './App.css';
import PersonalProjectWrapper from './components/PersonalProjectWrapper.jsx';

function App() {
  return (
    <div className="App">
        <Intro />
        <Navbar />
        <AboutMe />
        <WorkExperienceGrid />
        <PersonalProjectWrapper />
        <Footer />
    </div>
  );
}

export default App;
