import Box from '../components/Box.js'
import Legal from '../components/Legal.js'
import resumeIcon from '../images/icons/folder.png'
import trophy from '../images/icons/trophy.png'
import githubImg from '../images/icons/github.png'
import blueprint from '../images/icons/blueprint.png'
import suitcase from '../images/icons/suitcase.png'
import skills from '../images/icons/pencil.png'
import handshake from '../images/icons/handshake.png'
import love from '../images/icons/love.png'
import akhil from '../images/Akhil.png'

function Home() {
  return (
    <>
      <img id="pfp" src={akhil} alt="Akhil"></img>
      <h1 id="maintitle">Welcome to my Portfolio!</h1><br></br>
      <p id="clformore">Click on a box to learn more</p>
      <div class='boxes'>
      <Box image={resumeIcon} title="Resume" link="https://drive.google.com/file/d/1Vip-qzqGid_2sIiIqoFb0PbDchvcWfN_/view?usp=sharing"/>
      <Box image={skills} title="Education/Skills" link="Skills"/>
      <Box image={suitcase} title="Experience"/>
      <Box image={blueprint} title="Projects"/>
      <Box image={trophy} title="Awards"/>
      <Box image={githubImg} title="GitHub" link="https://github.com/kakhil2004"/>
      <Box image={love} title="Social Media"/>
      <Box image={handshake} title="Attributions" link="Attributions"/>
      </div>
      <Legal/>
    </>
    
  );
}

export default Home;
