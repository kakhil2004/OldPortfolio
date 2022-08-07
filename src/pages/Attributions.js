import Legal from '../components/Legal.js'
import resumeIcon from '../images/icons/folder.png'
import trophy from '../images/icons/trophy.png'
import githubImg from '../images/icons/github.png'
import blueprint from '../images/icons/blueprint.png'
import suitcase from '../images/icons/suitcase.png'
import skills from '../images/icons/pencil.png'
import handshake from '../images/icons/handshake.png'
import love from '../images/icons/love.png'


function Attributions() {
  return (
    <div id='container'>
      <h1 id="maintitle">Attributions</h1><br></br>
      <p id="clformore">All elements that are not owned by Akhil Kothapalli are cited here</p>
      <img id="icon" src={blueprint} alt="logo"></img>
      <a href="https://www.flaticon.com/free-icons/project" title="project icons">Project icons created by Smashicons - Flaticon</a><br></br>
      <img id="icon" src={githubImg} alt="logo"></img>
      <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Pixel perfect - Flaticon</a><br></br>
      <img id="icon" src={trophy} alt="logo"></img>
      <a href="https://www.flaticon.com/free-icons/trophy" title="trophy icons">Trophy icons created by Freepik - Flaticon</a><br></br>
      <img id="icon" src={resumeIcon} alt="logo"></img>
      <a href="https://www.flaticon.com/free-icons/folder" title="folder icons">Folder icons created by Freepik - Flaticon</a><br></br>
      <img id="icon" src={suitcase} alt="logo"></img>
      <a href="https://www.flaticon.com/free-icons/work" title="work icons">Work icons created by Freepik - Flaticon</a><br></br>
      <img id="icon" src={skills} alt="logo"></img>
      <a href="https://www.flaticon.com/free-icons/skills" title="skills icons">Skills icons created by Freepik - Flaticon</a><br></br>
      <img id="icon" src={handshake} alt="logo"></img>
      <a href="https://www.flaticon.com/free-icons/agreement" title="agreement icons">Agreement icons created by Freepik - Flaticon</a><br></br>
      <img id="icon" src={love} alt="logo"></img>
      <a href="https://www.flaticon.com/free-icons/heart" title="heart icons">Heart icons created by Freepik - Flaticon</a><br></br>
      <Legal/>
    </div>
    
  );
}

export default Attributions;
