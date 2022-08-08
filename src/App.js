
import Home from './pages/Home.js'
import Skills from './pages/Skills.js'
import Test from './pages/test.js'
import {
  Routes,
  Route
} from "react-router-dom";
import Attributions from './pages/Attributions.js';
import { Social } from './pages/Social.js';
import { Experience } from './pages/Experience.js';
import { Projects } from './pages/Projects.js';
import Chart from './components/Chart.js';
function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path="/Skills" element={<Skills/>} />
      <Route path="/Attributions" element={<Attributions/>} />
      <Route path="/Experience" element={<Experience />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Socials" element={<Social/>} />
      <Route path="/test" element={<Test/>} />
      <Route path="/Chart" element={<Chart/>} />
      
    </Routes>
  );
}

export default App;