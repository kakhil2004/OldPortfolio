
import Home from './pages/Home.js'
import Skills from './pages/Skills.js'
import Test from './pages/test.js'
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import Attributions from './pages/Attributions.js';
import { Social } from './pages/Social.js';
import { Experience } from './pages/Experience.js';
import { Projects } from './pages/Projects.js';
import Awards from './pages/Awards.js';
import Chart from './components/Chart.js';
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Attributions" element={<Attributions />} />
        <Route path="/Awards" element={<Awards />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Socials" element={<Social />} />
        <Route path="/test" element={<Test />} />
        <Route path="/Chart" element={<Chart />} />
      </Routes>
    </HashRouter>

  );
}

export default App;

/*

<BrowserRouter>
  <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route exact path="/Skills" element={<Skills/>} />
    <Route exact path="/Attributions" element={<Attributions/>} />
    <Route exact path="/Experience" element={<Experience />} />
    <Route exact path="/Projects" element={<Projects />} />
    <Route exact path="/Socials" element={<Social/>} />
    <Route exact path="/test" element={<Test/>} />
    <Route exact path="/Chart" element={<Chart/>} />
  </Routes>
</BrowserRouter>

*/
