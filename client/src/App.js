import logo from "./logo.svg";
import "./App.css";
import Navbar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container py-5">
        <Home />
        <hr />
        <About />
        <hr />
        <Projects />
        <hr />
        <Contact />
      </div>
    </div>
  );
}

export default App;