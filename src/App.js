
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
import Chart from './components/Chart.js';
function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={Home}/>
  
    </HashRouter>
    
  );
}

export default App;

/*
<Route exact path="/Skills" component={Skills} />
        <Route exact path="/Attributions" component={Attributions} />
        <Route exact path="/Experience" component={Experience} />
        <Route exact path="/Projects" component={Projects} />
        <Route exact path="/Socials" component={Social} />
        <Route exact path="/test" component={Test} />
        <Route exact path="/Chart" component={Chart} />
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