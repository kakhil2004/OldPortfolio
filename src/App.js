import Box from './components/Box.js'
import Legal from './components/legal.js'
import resumeIcon from './images/folder.png'
import trophy from './images/trophy.png'
import githubImg from './images/github.png'
import blueprint from './images/blueprint.png'
import suitcase from './images/suitcase.png'
import skills from './images/pencil.png'
import handshake from './images/handshake.png'
import love from './images/love.png'
import akhil from './images/Akhil.png'

function App() {
  return (
    <div>
      <img id="pfp" src={akhil} alt="Akhil"></img>
      <h1 id="maintitle">Welcome to my Portfolio!</h1><br></br>
      <p id="clformore">Click on a box to learn more</p>
      <Box image={resumeIcon} title="Resume"/>
      <Box image={trophy} title="Awards"/>
      <Box image={githubImg} title="GitHub"/>
      <Box image={blueprint} title="Projects"/>
      <Box image={suitcase} title="Experience"/>
      <Box image={skills} title="Skills"/>
      <Box image={love} title="Social Media"/>
      <Box image={handshake} title="Attributions"/>
      <Legal />
    </div>
  );
}

export default App;
