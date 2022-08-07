import HugeBox from '../components/HugeBox.js'
import Legal from '../components/Legal.js';
import gt from '../images/gt.png'
import nhs from '../images/nhs.png'
import Chart from '../components/Chart.js'
const techText = "Pursuing a Bachelor's in Computer Science"

function Skills() {
  return (
    <>
      <h1 id="maintitle">Education and Skills</h1><br></br>
      <p id="clformore">Click on a box to learn more</p>
      <HugeBox image={gt} title='Georgia Institute Of Technology' text={techText}/>
      <Chart />
      <HugeBox image={nhs} title='Northview High School' text={techText}/>
      
      <Legal />
    </>

    
  );
}

export default Skills;
