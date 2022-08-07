
import Home from './pages/Home.js'
import Skills from './pages/Skills.js'
import Test from './pages/test.js'
import {
  Routes,
  Route
} from "react-router-dom";
import Attributions from './pages/Attributions.js';

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path="/Skills" element={<Skills/>} />
      <Route path="/Attributions" element={<Attributions/>} />
      <Route path="/test" element={<Test/>} />
      
    </Routes>
  );
}

export default App;
